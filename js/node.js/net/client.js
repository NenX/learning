var net = require('net')
var client = net.createConnection(9999,'127.0.0.1')
client.on('connect',function(){
  console.log('connent')
})
client.on('data',function(d){
  console.log('客户端：收到消息' + d)
})
client.on('close',function(boolean){
  console.log('close')
})
client.on('end',function(){
  console.log('end')
})
client.write('我是客户端啊')

// var http = require('http')
// var options = {
//   method: 'POST',
//   protocol: 'http:',
//   hostname: '127.0.0.1',
//   port: '9999',
//   path: '/post',
//   headers: {
//     "connection": "keep-alive",
//     "content-type": "application/x-www-form-urlencoded"
//   }
// };
// var httpClient = http.request(options, function (d) {
//   d.on('data', function (d) {
//     console.log(d.toString())
//   })
// })
// httpClient.write(require('querystring').stringify({a:1,b:2}))
// httpClient.end('结束吧')


