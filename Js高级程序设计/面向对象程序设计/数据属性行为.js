'use strict'
var person = {}

Object.defineProperty(person,"name",{
  writable:false,
  value:"Tom"
})

console.log(person.name);
person.name = 'Greg'
console.log(person.name);

