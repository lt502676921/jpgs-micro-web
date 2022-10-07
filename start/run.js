const filePath = require('./filePath')
const runShell = require('./util').runShell

// 启动项目
function run() {
  Object.keys(filePath).forEach(key => {
    const app = filePath[key]

    runShell(`cd ${app.path} && ${app.startCommand}`)
  })

  console.log('start success, open browser now')
  runShell(`node ${path.join(__dirname, './openBrowser.js')}`)
}

run()
