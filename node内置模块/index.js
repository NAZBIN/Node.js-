//fist version , code in only one script

const EventEmitter = require('events').EventEmitter;

//创建一个实例
class Geek extends EventEmitter{
  constructor(){
    super();
    setInterval(()=>{
      this.emit('addLesson',{price:Math.random() * 100})
    },2000)
  }
}

const geek = new Geek();

geek.addListener('addLesson',(res)=>{
  if(res.price < 80){
    console.log('buy！',res);
  }
})