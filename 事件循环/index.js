//实现一个简单的 event loop,大概模拟出事件循环的执行方法

//写循环方法

const eventloop = {
  queue:[],//队列

  loop(){
    while(this.queue.length){ //查看是否有未处理完的消息
      var callback = this.queue.shift();
      callback();
    }

    setTimeout(this.loop.bind(this),500); //50毫秒执行下一次循环.处理队列中的事件
  },

  add(callback){
      this.queue.push(callback)
  }
}


const message = {
  queue:[], //任务队列
  loop(){
    if(this.loop.length){ //队列不为空，从队列中取出任务执行。
      this.loop.shift();
      callback();
    }
    setTimeout(this.loop.bind(this),500);
  },
  add(callback){ //添加任务事件。
    this.queue.push(callback);
  }

}

message.loop();

setTimeout(()=>{
  message.add(function(){
    console.log('test');
  })
},500)

eventloop.loop();

setTimeout(()=>{
  eventloop.add(function(){
    console.log(1);
  })
},500)

setTimeout(()=>{
  eventloop.add(function(){
    console.log(2);
  })
},800)