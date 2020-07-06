const koa = require('koa');
const mount = require('koa-mount');
const fs = require('fs');
const static = require('koa-static')

const app = new koa();

//访问静态数据
app.use(
  static(__dirname + '/source/static/')
)

app.use(
  mount('/',async  (ctx) =>{
    ctx.body = fs.readFileSync(__dirname + '/source/index.htm','utf-8');
  })
)

app.listen(3000);