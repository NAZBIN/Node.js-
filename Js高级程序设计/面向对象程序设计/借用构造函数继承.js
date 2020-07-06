function SuperType(name){
  this.name = name;
  this.colors = ['red','green','blue'];
}

function SubType(name,age){
  SuperType.call(this,name)
  this.age = age
}

SubType.prototype = new SubType('Tom');
console.log(SubType.prototype.constructor)
