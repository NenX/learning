## 浏览器可视区域
```js
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
```
## 文档滚动距离
```js
//chrome || IE
let top = window.pageYOffset
          || window.scrollY
          || document.documentElement.scrollTop
          || document.body.scrollTop;
let left = window.pageXOffset
          || window.scrollX
          || document.documentElement.scrollLeft
          || document.body.scrollLeft;
```
## dom元素可视宽高
```js
let div = document.querySelector('div');
let width = div.offsetWidth;
let height = div.offsetHeight;

```
## 获取元素绝对坐标
```js
let getAbsOffsetTop = el => {
  let left = 0,
      top = 0;
  while(el.offsetParent) {
    left += el.offsetLeft;
    top += el.offsetTop;
    el = el.offsetParent;
    return {
      left,
      top
    }
  }
}
```