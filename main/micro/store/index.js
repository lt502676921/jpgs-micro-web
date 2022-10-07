export const createStore = (initData = {}) =>
  (() => {
    let store = initData
    const observers = [] // 管理所有的订阅者，依赖

    // 获取 store
    const getStore = () => store

    // 更新 store
    const updateStore = value => {
      if (value !== store) {
        // 缓存 store
        const oldValue = store
        // 更新 store
        store = value
        // 通知所有的订阅者，监听 store 的变化
        observers.forEach(async item => await item(store, oldValue))
      }
    }

    // 添加订阅者
    const subscribe = fn => {
      observers.push(fn)
    }

    return {
      getStore,
      updateStore,
      subscribe,
    }
  })()
