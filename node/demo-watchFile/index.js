const EventEmitter = require('events')
const fs = require('fs')
const resolve = require('path').resolve
class Watch extends EventEmitter {
  constructor(watchDir, processDir) {
    super()
    this.watchDir = watchDir
    this.processDir = processDir
  }
  watch() {
    fs.readdir(this.watchDir, (err, files) => {
      if (err) throw err
      files.forEach(item => {
        this.emit('process', item)
      })
    })
  }
  start() {
    fs.watch(this.watchDir, { recursive: true }, (type, filename) => {
      this.watch()
    })
    this.on('process', data => {
      console.log(data, this.watchDir + '/' + data)
      fs.rename(this.watchDir + '/' + data, this.processDir + '/' + data, err => {
        if (err) throw err
      })
    })
  }
}
let w = new Watch(resolve(__dirname, './a'), resolve(__dirname, './b'))
w.start()