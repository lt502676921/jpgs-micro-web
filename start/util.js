const childProcess = require('child_process')

const spawn = childProcess.spawn
const spawnSync = childProcess.spawnSync

module.exports.runShell = (shell) => {
  spawn(shell, { stdio: ['inherit', 'inherit', 'inherit'], shell: true })
}

module.exports.runShellSync = (shell) => {
  spawnSync(shell, { stdio: ['inherit', 'inherit', 'inherit'], shell: true })
}
