const glob = require('glob');

var result = null;

//同步分析
console.time('glob')
result = glob.sync(__dirname+'/**/*');
console.timeEnd('glob')
console.log(result)

//非阻塞分析:

console.time('glob')
glob(__dirname+'/**/*',function(err,res){
  result = res;
  console.log(result)
})
console.timeEnd('glob')
console.log('test 11')