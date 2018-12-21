/**
 * 同步http
 */
var http = require('http')
var net = require('net')
var currentSocket = null
var socketArr = []
var httpServer = http.createServer(function (req, res) {
    setTimeout(function (params) {
        res.end('aaaaaaaaaaaa')
    }, 1000)
    res.on('finish', function () {
        currentSocket = null
        handle()
    })
    res.on('close', function () {
        console.log('my close')
    })
})
net.createServer(function (socket) {
    socket.on('close', function () {
        console.log('close')
    })

    socketArr.push(socket)

    socket.on('error', function (e) {
        console.log(e)
    })
    handle()
}).listen(4000)
function handle() {
    if (currentSocket !== null || socketArr.length <= 0) {
        return
    }
    currentSocket = socketArr.shift()

    httpServer.emit('connection', currentSocket)
}






// //　保存请求的队列，每个元素都是一个socket
// let watingQueue = [];

// //　当前处理的请求
// let curtSocket  = null;

// let count = 0;

// //　建立一个http服务器
// let httpServer = http.createServer(function (req, res) {
//     // 延迟一秒中回复
//     setTimeout(function () {
//         res.end(`request: ${++count}`, "utf8");
//     }, 1000);

//     res.on("finish", function () {
//         curtSocket = null;
//         //　一个请求结束了，处理下一个请求
//         dealRequest();
//     });
// });

// // 建立一个tcp的服务器（http协议是建立在tcp协议上的）
// net.createServer(function (socket) {
//     //　将请求压入列队
//     enqueueSocket(socket);

//     //　处理请求（如果现在真在处理的请求，不做任何处理）
//     dealRequest();
// }).listen(4000);

// function enqueueSocket (socket) {
//     watingQueue.push(socket);
// }

// function dealRequest () {
//     if (curtSocket != null || watingQueue.length <= 0) {
//         return;
//     }

//     curtSocket = watingQueue.shift();
//     httpServer.emit("connection", curtSocket);  
// }


for (var i = 0; i < 10; ++i) {
    request();
}

function request(i) {
    let startTime = Date.now();

    http.get("http://127.0.0.1:4000", function (res) {
        let str = "";

        res.setEncoding("utf8");

        res.on("data", function (data) {
            str += data;
        });

        res.on("end", function () {
            console.log("++++++++++++++++++++");
            console.log(str);
            console.log(`time ${Date.now() - startTime}`);
            console.log("--------------------\r\n");
        });
    });
}
