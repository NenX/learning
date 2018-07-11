const request = require('request')
const htmlparser = require('htmlparser')
request({uri:'http://www.baidu.com'},(err,req,body)=>{
  let handler = new htmlparser.DefaultHandler((err,dom)=> {
    console.log('dom:'+dom)
  })
  p = new htmlparser.Parser(handler)
  p.parseComplete(body)
})
require('fs').readFile(__dirname + '/package.json', (err,data)=> {
  console.log(data.toString(),'==',data.toJSON())
})