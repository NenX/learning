var fs = require('fs')
var htmlPath = './html/hello.html'

var writeStream = fs.createWriteStream('./压缩/gzip.txt.gz')
var zlib = require('zlib')
var http = require('http')
http.createServer(function (req, res) {
  var acceptEncoding = req.headers['accept-encoding']
  if (acceptEncoding.indexOf('gzip') > -1) {
    var readStream = fs.createReadStream(htmlPath)
    var gzip = zlib.createGzip()
    res.writeHead(200, {
      'Content-Encoding': 'gzip'
    })
    readStream.pipe(gzip).pipe(res)
  } else {
    readStream.pipe(res)
  }
}).listen(8899)