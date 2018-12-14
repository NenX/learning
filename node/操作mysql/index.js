
const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'w.rdc.sae.sina.com.cn',
    user:'joz1koy12o',
    password:'wwklm5ij5ilj2iwwmzk3i1jz33354xj1l54hlzzi',
    database:'app_xxmusic'
})

//测试链接
connection.connect();
connection.query('SELECT 1 + 1 As solution',function(e,res,fields){
    if(e){
        throw e
    }
    console.log('test connection',res)
})


//增
let addSql = 'INSERT INTO websites(id,name,url,alexa,country) VALUES (0,?,?,?,?)'
connection.query(addSql,['lee','https:lee','1','cn'],(e,res)=>{
    if(e){
        console.log('add',e)
    }
    console.log('add',res)
    
})

//删
let delSql = 'DELETE FROM websites WHERE id in(6,7,8,9,10,11,12,13,14,16)'
connection.query(delSql,(e,res)=>{
    if(e){
        console.log('del',e)
    }
    console.log('del',res)
    
})

//改
let modSql = 'UPDATE websites SET name = ?,url = ? WHERE id = ?'
connection.query(modSql,['谷歌','https:谷歌','1'],(e,res)=>{
    if(e){
        console.log('mod',e)
    }
    console.log('update',res)
    
})

//查
let sql = 'SELECT * FROM websites'
connection.query(sql,function(e,res,fields){
    if(e){
        throw e
    }
    console.log('websites:',res)
})

connection.end()

