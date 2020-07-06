const net = require('net');

//客户端手动创建一个socket

const socket = new net.Socket({});

socket.connect({
  host:'127.0.0.1',
  port:4000
})

socket.write('good morning');