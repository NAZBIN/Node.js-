const geek = require('./lib');

geek.addListener('addLesson',(res)=>{
  if(res.price < 80){
    console.log('buy！',res);
  }
})

//这样做的好处，可以无限添加监听新课程的认识，而geektime这个类不需要做任何改变，
//拓展可维护性，不需要改变底层。
//观察者模式是用来解决两个对象之间的通信问题

const geek = require('./lib');

geek.addListener('addLesson',(res)=>{
  if(res.price < 80){
    console.log('buy!',res);
  }  
})