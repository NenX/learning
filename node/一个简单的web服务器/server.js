let http = require('http');
var util = require('util');
function start(){
  function onReq(req,res){
    res.writeHead(200,'thisIsStatusCode',{'Content-Type':'text/plain'});
    var a = req;
    res.write('\</pre\>\<script\>alert("s")\</script\>');
    res.end();
  }
  http.createServer(onReq).listen(8080);
  console.log('start');
}

exports.start = start;