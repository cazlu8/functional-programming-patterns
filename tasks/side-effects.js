const Task = require(`data.task`)
const fs = require('fs')
const util = require('util');
const fsReadFile = util.promisify(fs.readFile)
const fsWriteFile = util.promisify(fs.writeFile)
const path = require('path')

function cloneItSelf () {
  const filename = path.basename(__filename)
  readFile(__filename)
    .chain(data => writeFileFile(filename, data))
    .fork(err => {
      throw new Error(err)
    },() => console.log('file created'))
}

cloneItSelf()

function readFile (filename) {
  return new Task ((reject, resolve) => {
    fsReadFile(filename, 'utf8')
      .then(resolve)
      .catch(reject)
  })
}

function writeFileFile (filename, content) {
  const absolutePath = `${__dirname}\\clone_of_${filename}`
  return new Task ((reject, resolve) => {
    fsWriteFile(absolutePath, content)
      .then(resolve)
      .catch(reject)
  })
}
