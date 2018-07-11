1. chrome控制台打印的对象是动态更新大。
```js
  var obj = {a:1};
  console.log(obj);
  obj.a = 2;
```
2. for loop and forEach
```js
const arr = [{},{}]
//access arr's length once
for(let i = 0, length = arr.length;i < length;i++){}
//access arr's length every time
for(let i = 0; i < arr.length;i++){}
//access arr's item every time
arr.forEach(item => {})
```