import { performScriptForEval, performScriptForFunction } from './performScript'
import { ProxySandbox } from './proxySandbox'
import { SnapShotSandbox } from './snapShotSandbox'

export const sandbox = (app, script) => {
  const proxy = new ProxySandbox()

  if (!app.proxy) {
    app.proxy = proxy
  }

  // 1.设置环境变量
  window.__MICRO_WEB__ = true

  // 2.允许js文件
  const module = performScriptForEval(script, app.name, app?.proxy?.proxy)

  // 将子应用的生命周期挂载到app上
  if (checkLifeCycle(module)) {
    app.bootstrap = module.bootstrap
    app.mount = module.mount
    app.unmount = module.unmount
  }
}

const checkLifeCycle = module => module && module.bootstrap && module.mount && module.unmount
