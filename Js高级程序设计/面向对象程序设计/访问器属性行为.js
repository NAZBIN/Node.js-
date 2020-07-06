var book = {
  _year:2004,
  edition:1
}

Object.defineProperty(book,"year",{
  get:function(){
    return this._year;
  },
  set:function(newValue){
    if(newValue>2004){
      this._year = newValue;
      console.log(this._year)
      this.edition += newValue-2004;
    }
  }
})

book.year = 2007;
console.log(book.edition);


var person = {};
Object.defineProperties(person,{
  _name:{
    writable:true,
    value:'Tom'
  },
  year:{
    writable:true,
    value: 17 
  },
  name:{
    get:function(){
      return this._name;
    },
    set:function(value){
      this._name = value;
    }
  }
});

person.name = 'TT';
console.log(person.year);

var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.value);
console.log(descriptor.configurable)