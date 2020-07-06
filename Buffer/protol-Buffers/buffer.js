const fs = require('fs');
const protobuf = require('protocol-buffers');
var schema = protobuf(fs.readFileSync(__dirname + '/test.proto'))

console.log(schema);
var buf = schema.Column.encode({
  id:3,
  author:'Tom',
  price:80.2
});

console.log(buf)

console.log(schema.Column.decode(buf));