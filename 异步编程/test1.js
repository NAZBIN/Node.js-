//callback实现异步。

//回调地域

function interview(callback){
  setTimeout(()=>{
    if(Math.random() < 0.2){
      callback(null,'success')
    }else{
      callback(new Error('fail'))
    }
  },1000)
}


interview(function(res){
  if(res){
    return console.log('cry')
  }
  interview(function(res){
    if(res){
      return console.log('cry at 2end round')
    }
    
    interview(function(res){
      if(res){
        return console.log('cry at 3end round')
      }
      console.log('smile')
    })
  })
})