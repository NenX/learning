var fs = require('fs')
var readStream = fs.createReadStream('./raw.txt','UTF8')
var writeStream = fs.createWriteStream('./压缩/gzip.txt.gz')
var zlib = require('zlib')
var gzip = zlib.createGzip()
readStream.pipe(gzip).pipe(writeStream)