function Person(){

}

var friend = new Person;

Person.prototype.sayhi = function(){
  console.log('hello');
}
console.log(friend.sayhi());


