
//并发控制的方法Promise.all()
//Promise状态机实现异步

(function(){
  Promise.all([
    interview('Yeeco'),
    interview('Xiaomi')
  ])
  .then(()=>{
    console.log('smile')
  })
  .catch((err)=>{
    console.log('cry for' + err.name)
  })
})();

function interview(name){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random() > 0.5){
        resolve('success')
      }else{
        var error = new Error('fail')
        error.name = name;
        reject(error);
      }
    },500)
  })
}


(async function(){
  try{
    await interview(1);
    await interview(2);
    await interview(3);
  }catch(e){
    return console.log('cry at'+e.round)
  }
  console.log('success');
})()

//在 async function中实现并行异步任务

(async function(){
  try{
    await Promise.all([interview(1),interview(2)])
  }catch(e){
    return console.log('cry' + e.round)
  }
  console.log('success')
})