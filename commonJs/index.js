//用commonJS 重写石头剪刀布游戏
// playerAction = process.argv[process.argv.length-1]

const game = require('./lib.js')
   
// const result = game(playerAction)
// console.log(result)

//需求：让用户能够持续输入，当用户赢了三次之后杀死该进程。
let count = 0;

process.stdin.on('data',e=>{
  const playerAction = e.toString().trim();
  const result = game(playerAction)
  console.log(result)

  if(result === 1){
    count++
  }
  
  if(count === 3){
    console.log("say bye！")
    process.exit();
  }
})

