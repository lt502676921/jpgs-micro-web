const path = require('path')

const filePath = {
  main: {
    path: path.join(__dirname, '../main'),
    startCommand: 'npm run dev',
  },
  order: {
    path: path.join(__dirname, '../order'),
    startCommand: 'npm run dev',
  },
  product: {
    path: path.join(__dirname, '../product'),
    startCommand: 'npm start',
  },
  user: {
    path: path.join(__dirname, '../user'),
    startCommand: 'npm start',
  },
}

module.exports = filePath
