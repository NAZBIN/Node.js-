const mount = require("koa-mount");
const koa = require('koa');

const app = new koa;
//下载页
app.use(
  mount('/download',require('./download/index'))
)
//详情页
app.use(
  mount('/detail',require('./detail/index'))
)
//播放页
app.use(
  mount('/play',require('./play/index'))
)
//列表页
app.use(
  mount('/list',require('./list/index'))
)


app.listen(3000,()=>{
  console.log('listened 3000')
})