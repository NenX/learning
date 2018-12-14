function route(handle,pathname){
  if(typeof handle[pathname]=== 'function'){
    handle[pathname]();
  }
}