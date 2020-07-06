var {graphql,buildSchema} = require('graphql');

var schema = buildSchema(`type Query{
  hello:String
}`);

//类似 var schema = protobuf(readFile());

var root = {
  hello:()=>{
    return 'Hello world';
  },
};


module.exports = function(query){
  
  graphql(schema,query,root).then(response => {
    return response
  })
  
}