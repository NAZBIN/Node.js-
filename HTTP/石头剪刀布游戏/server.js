//版本1 
const queryString = require('querystring'); //query解析库
const http =  require('http');
const fs = require('fs');
const url = require('url');
const game = require('./game');
const express = require('express');


http.createServer(function(req,res){
  const parseUrl = url.parse(req.url);

  if(req.url == '/favicon.ico'){
    res.writeHead(200);
    res.end();
    return;
  }
  
  if(parseUrl.pathname == '/game'){
    const query = queryString.parse(parseUrl.query);
    const playerAction = query.action;
    const gameResult = game(playerAction);
    if(count >= 3){
      res.writeHead(500);
      res.end('我也不跟你玩啦！');
    }
    res.writeHead(200);
    if(gameResult == 0){
      res.end('平局')
    }else if(gameResult == 1){
      res.end('你赢了')
      count++
    }else{
      res.end('你输了')
    }
    
    
  }

  if(parseUrl.pathname == '/'){
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } 
  
  
}).listen(2702);