import { findAppByRoute } from '../utils'
import { getMainLifecycle } from '../const/mainLifeCycle'
import { loadApp } from '../loader'

export const lifecycle = async () => {
  // 获取到上一个子应用
  const prevApp = findAppByRoute(window.__ORIGIN_APP__)

  // 获取到要跳转的子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__)

  if (!nextApp) {
    return
  }
  if (prevApp && prevApp.unmount) {
    if (prevApp.proxy) {
      prevApp.proxy.inactive() // 将沙箱销毁
    }
    await destoryed(prevApp)
  }
  const app = await beforeLoad(nextApp)
  await mounted(app)
}

export const beforeLoad = async app => {
  await runMainLifeCycle('beforeLoad')
  app && app.bootstrap && app.bootstrap()
  const subApp = await loadApp(app) // 获取子应用的内容
  subApp && subApp.bootstrap && subApp.bootstrap()
  return subApp
}

export const mounted = async app => {
  app &&
    app.mount &&
    app.mount({
      appInfo: app.appInfo,
    })
  await runMainLifeCycle('mounted')
}

export const destoryed = async app => {
  app && app.unmount && app.unmount()
  // 对应的执行主应用的生命周期
  await runMainLifeCycle('destoryed')
}

export const runMainLifeCycle = async type => {
  const mainlife = getMainLifecycle()
  await Promise.all(mainlife[type].map(async item => await item()))
}
