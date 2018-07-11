var net = require('net');
var netServer = net.createServer()
netServer.on('connection',function(socket){
  console.log('服务端：connention 啦')
  on(socket)
}).listen('8888','127.0.0.1',function(){
  console.log('服务端：开始接收信息')
})

// var http = require('http')
// var httpServer = http.createServer(function (req,res) { 
//   console.log('http：'+req)
//   req.pipe(require('fs').createWriteStream('./req.txt'))
//   res.end('123')
// })
// httpServer.on('connection',function(socket){
//   console.log('服务端: connention 啦')
//   on(socket)
// }).listen('9999','127.0.0.1',function(){
//   console.log('服务端：开始接收信息')
// })

function on(socket) {
  socket.on('data', function (d) {
    console.log('服务端：收到消息为' + d);
    socket.write('来自服务端的消息:aaaa')
  })
  socket.on('close', function (boolean) {
    console.log('服务端：close')
  })
  socket.on('end', function () {
    console.log('服务端：end')
  })
}