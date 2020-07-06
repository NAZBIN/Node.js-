eval("function sayhi(){console.log('hello 1')}");
sayhi();

//不能打印出hello 2  因为 eval中创建的任何变量/函数都不会被提升
// -->因为在解析代码的时候它们被包含在一个字符串中，只在eval()执行的时候创建
// sayHi();
// eval("function sayHi(){console.log('hello 2')}");

sayHi();
function sayHi(){
  console.log('hello 3');
}