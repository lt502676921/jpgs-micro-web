const exec = require('child_process').execSync

const cmdData = {
  wind32: 'start',
  linux: 'xdg-open',
  darwin: 'open',
}

exec(`${cmdData[process.platform]} http://localhost:5173`)
