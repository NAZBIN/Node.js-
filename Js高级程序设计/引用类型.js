var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.every(function(item,index,array){
  return (item>2);
});

console.log(everyResult);

var someResult = numbers.some(function(item,index,array){
  return (item>2);
})

console.log(someResult);

var filterResult = numbers.filter(function(item,index,array){
  return (item>2)
})

console.log(filterResult);

var mapResult = numbers.map(function(item,index,array){
  return (item*2)
})

console.log(mapResult);

numbers.forEach(function(item,index,array){
  if(item>2){
    item+=1;
    console.log(item);
  }
})

