const fs = require('fs')
const path = require('path')
const Task = require('data.task')
const fsReadFile = promisify(fs.readFile)
const fsWriteFile = promisify(fs.writeFile)

const clone = () => {
  const fileName = path.basename(__filename)
  const newFilePath = `${__dirname}\\clone_of_${fileName}`
  return readFile(__filename)
    .chain(content => writeFile(newFilePath, content))
    .fork(err => {throw new Error(err)}, () => console.log('file cloned'))
}

clone()

function readFile (filename , encoding) {
  return new Task((reject , resolve) => {
    fsReadFile(filename , encoding)
      .then(resolve)
      .catch(reject)
  })
}

function writeFile (filename , content) {
  return new Task((reject , resolve) => {
    fsWriteFile(filename , content)
      .then(resolve)
      .catch(reject)
  })
}

function promisify (callbackBasedApi) {
  return function () {
    const args = [...arguments]
    return new Promise ((resolve, reject) => {
      args.push((err, result) => {
        if (err)
            return reject(err)
        
        const results = [...arguments]
        if (2 >= results.length)
            resolve(result)
        else
            resolve([].slice.call(results, 1))
      })
      
      callbackBasedApi.apply(null, args)
    })
  }
}

