const net = require('net');
const socket = new net.Socket({});

socket.connect({
  host:'127.0.0.1',
  port:4000
})

const lessonids = [
  "136797",
  "136798",
  "136799",
  "136800",
  "136801",
  "136803",
  "136804",
  "136806",
  "136807",
  "136808",
  "136809",
  "141994",
  "143517",
  "143557",
  "143564",
  "143644",
  "146470",
  "146569",
  "146582"
]

let id = Math.floor(Math.random()*lessonids.length);
//半双工通信，第一次由客户端发起数据如下
socket.write(encode(id));

//准备接受数据
socket.on('data',function(buffer){
  console.log(buffer.toString());
  //由于半双工，故在第一次发完数据之后又会发送第二个请求
  id = Math.floor(Math.random()*lessonids.length);
  socket.write(encode(id));
})

//把编码请求包的逻辑封装为一个函数
function encode(index){
  buffer = Buffer.alloc(4);
  buffer.writeInt32BE(lessonids[index]);
  
  return buffer;
};

