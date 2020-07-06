module.exports = function(playerAction){ 

  //边界判断
  if(['rock','scissor','player'].indexOf(playerAction) == -1){
    throw new Error('invalid playerAction');
  }
  var random = Math.random()*3; //创建一个随机数

  if(random < 1){ //
    var computerAction = 'rock'
  }else if(random > 2){
    var computerAction = 'scissor'
  }else{
    var computerAction = 'paper'
  }
  console.log('player：'+playerAction);
  console.log('computer：'+computerAction);

  if(playerAction == computerAction){
    console.log('平局');
    return 0;
  }else if(
    (computerAction === 'rock' && playerAction === 'paper')||
    (computerAction === 'paper' && playerAction === 'scissor')||
    (computerAction === 'scissor'&& playerAction === 'rock')
  ){
    console.log('你赢了');
    return 1;
  }else{
    console.log('电脑赢了');
    return -1;
  }
}

