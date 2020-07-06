function SuperType(name){
  this.name = name;
  this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function(){
  console.log(this.name);
}

function SubType(name,age){
  SuperType.call(this,name);
  this.age = 21;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
  console.log(this.age);
}

var instances1 = new SubType("Joker",21);
instances1.colors.push("black");
console.log(instances1.colors);

var instances2 = new SubType("Tome",20);
instances2.colors.pop();
console.log(instances2.colors);
console.log(Array.prototype.push.apply(instances2.colors,instances1.colors));


//原型式继承
function object(o){
  function F(){
    F.prototype = o;
  }
  return new F();
}

//寄生式继承
function createAnother(original){
  var clone = object(original);
  clone.sayHi = function(){
    console.log("hi");
  }
  return clone;
}

var another = createAnother();


function inheritPrototype(subType,superType){
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;

}

function getLocalStorage(){
  if(typeof localStorage == "object"){
    return localStorage;
  }else if(typeof globalStorage == "object"){
    return gloablStorage[location.host];
  }else{
    throw new Error("Local storage not available.");
  }
}

