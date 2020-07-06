//将底层逻辑封装在一个模块中

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

module.exports = geek;


//底层逻辑：创建课程事件,

const EventEmitter = require('events').EventEmitter;

class Geek extends EventEmitter{
  constructor(){
    super();
    setInterval(()=>{
      this.emit('addLesson',{price:Math.random() * 100})
    },2000)
  }
}

const geek  = new Geek();

module.exports = geek;