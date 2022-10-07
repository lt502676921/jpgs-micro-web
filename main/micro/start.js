import { setList, getList } from './const/subApps'
import { currentApp } from './utils'
import { rewriteRouter } from './router/rewriteRouter'
import { setMainLifecycle } from './const/mainLifeCycle'
import { Custom } from './customevent'
import { prefetch } from './loader/prefetch'

const custom = new Custom()
custom.on('test', data => {
  console.log(data)
})
window.custom = custom

// 实现路由拦截
rewriteRouter()

export const registerMicroApps = (appList, lifeCycle) => {
  setList(appList)

  lifeCycle.beforeLoad[0]()

  setMainLifecycle(lifeCycle)
}

// 启动微前端框架
export const start = () => {
  // 首先，验证当前子应用列表是否为空
  const apps = getList()

  if (!apps.length) {
    // 子应用列表为空
    throw new Error('子应用列表为空，请正确注册')
  }

  // 子应用列表不为空。查找到符合当前路由的子应用
  const app = currentApp()
  if (app) {
    const { pathname, hash } = window.location
    const url = pathname + hash
    window.history.pushState('', '', url)
    window.__CURRENT_SUB_APP__ = app.activeRule
  }

  // 预加载 - 加载接下来的所有子应用，但是不显示
  prefetch()
}
