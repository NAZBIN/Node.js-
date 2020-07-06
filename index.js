playerAction = process.argv[process.argv.length-1];
//获取用户输入

random = Math.random()*3;

if(random<1){
  var computerAction = 'rock'
}else if(random==1){
  var computerAction = 'scissor'
}else{
  var computerAction = 'paper'
}
console.log('player：'+playerAction);
console.log('computer：'+computerAction);

if(playerAction == computerAction){
  console.log('平局');
}else if(
  (computerAction === 'rock' && playerAction === 'paper')||
  (computerAction === 'paper' && playerAction === 'scissor')||
  (computerAction === 'scissor'&& playerAction === 'rock')
){
  console.log('player win');
}else{
  console.log('computer win');
}