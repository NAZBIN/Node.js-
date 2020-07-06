//Promise状态机实现异步
(function(){
  var promise = interview();
  promise.then((res)=>{
    console.log(res,'smile') //通过面试
  }).catch((err)=>{
    console.log(err,'cry')
  })
})();

function interview(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random() > 0.2){
        resolve('success')
      }else{
        reject(new Error('fail'))
      }
    },500)
  })
}