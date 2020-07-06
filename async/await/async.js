console.log(async function(){
  return 4;
}())

console.log(function (){
  return new Promise((resolve,reject)=>{
    resolve(4)
  })
}())


console.log(async function(){
  throw new Error('fail-4')
}())

console.log(function (){
  return new Promise((resolve,reject)=>{
    reject(new Error('fail-4'))
  })
}())


