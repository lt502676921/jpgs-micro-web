import * as appInfo from '../store'

export const subNavList = [
  {
    name: 'product',
    activeRule: '/product',
    container: '#main-container',
    entry: '//localhost:4001/',
    appInfo,
  },
  {
    name: 'user',
    activeRule: '/user',
    container: '#main-container',
    entry: '//localhost:4002/',
    appInfo,
  },
  {
    name: 'order',
    activeRule: '/order',
    container: '#main-container',
    entry: '//localhost:4003/',
    appInfo,
  },
]
