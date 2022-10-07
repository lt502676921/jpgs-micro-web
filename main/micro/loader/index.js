import { sandbox } from '../sandbox'
import { fetchResource } from '../utils/fetchResource'

const cache = {} // 根据子应用的name缓存

// 加载 html 的方法
export const loadApp = async app => {
  // 一、子应用需要显示在哪里
  let container = app.container
  // 二、子应用的入口
  let entry = app.entry
  const [dom, scripts] = await parseHTML(entry, app.name)
  const ct = document.querySelector(container)
  if (!ct) {
    throw new Error('容器不存在，请查看')
  }
  ct.innerHTML = dom

  scripts.forEach(item => {
    sandbox(app, item)
  })

  return app
}

export const parseHTML = async (entry, name) => {
  if (cache[name]) {
    return cache[name]
  }
  let allScript = []
  const html = await fetchResource(entry)
  const div = document.createElement('div')
  div.innerHTML = html
  const [dom, scriptUrl, script] = await getResources(div, entry)

  const scriptsData = await Promise.all(scriptUrl.map(async item => fetchResource(item)))
  allScript = script.concat(scriptsData)

  cache[name] = [dom, allScript]
  return [dom, allScript]
}

export const getResources = async (root, entry) => {
  const scriptUrl = []
  const script = []
  const dom = root.outerHTML

  function parse(element) {
    const children = element.children
    const parent = element.parent

    // 处理 script 中的内容
    if (element.nodeName.toLowerCase() === 'script') {
      const src = element.getAttribute('src')
      if (!src) {
        script.push(element.outerHTML)
      } else {
        // if (src.endsWith('.js')) {
        if (src.startsWith('http')) {
          scriptUrl.push(src)
        } else {
          scriptUrl.push(`http:${entry}/${src}`)
        }
        // }
      }

      if (parent) {
        parent.replaceChild(document.createComment('此 js 文件已经被微前端替换'), element)
      }
    }

    // 处理 link 中的内容(js)
    if (element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href')
      if (href.endsWith('.js')) {
        if (href.startsWith('http')) {
          scriptUrl.push(href)
        } else {
          scriptUrl.push(`http:${entry}/${href}`)
        }
      }
    }

    for (let i = 0; i < children.length; i++) {
      parse(children[i])
    }
  }
  parse(root)

  return [dom, scriptUrl, script]
}
