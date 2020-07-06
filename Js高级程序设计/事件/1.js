//DOM2级事件处理程序
//事件处理程序在其依附的元素作用域中执行。
//DOM2可以添加多个事件处理程序

var  div = document.getElementsByClassName("click-btn")

div.addEventListener("click",function(){
  alert('hello');  //这种添加匿名函数的方式不能通过removeEventListener来删除
},false)

var hander = function(){
  alert("hello");
}
div.addEventLister("click",hander,false);
div.removeEventListener("click",hander,false); //调用removeEventListener传入的参数也必须一致。


//跨浏览器的事件处理,使用EventUtil中的addHander()和removeHander()方法

var btn = document.getElementById("MyBtn");
EventUtil.addHandler(btn,"click",hander)
EventUtil.removeHander(btn,"click",hander)



EventUtil.addHandler(document,"readystatechange",function(){
  if(document.readyState == "interactive"||document.readyState == "complete"){
    EventUtil.removeHandler(document,"readystatechange",arguments.callee)
  }
})

var list = getElementByid("myLinks");

EventUtil.addHandler(list,"click",function(event){
  event = EventUtil.getEvent(event);
  target = EventUtil.getTarget(event); //检测对象 是否存在属性，存在即返回.
  
  switch(target.id){
    case "doSomething":
      Document.title = "i changed the document's title";
      break;
    case "goSomeWhere":
      location.href = "http://www.bonfires.cn";    
  }
  
})

