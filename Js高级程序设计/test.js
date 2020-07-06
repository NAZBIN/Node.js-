
//测试 indexof

var person = {name:'Tom'};
var people = [{name:'Tom'}]; //存的是对象

var morePeople = [person];  //存的是引用地址

console.log(people);
console.log(morePeople);
console.log(people.indexOf(person));
console.log(morePeople.indexOf(person)); 
