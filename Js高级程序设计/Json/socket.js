var socket = new  WebSocket("ws://www.bonfires.cn");

message = {
  "name":"tom",
  "year":21,
  "location":"Dalian"
}

socket.send(JSON.stringify(message));

socket.onmessage = function(event){
  var data = event.data;
}