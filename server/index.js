const express = require('express');

const Vue = require('vue');

const app = express();

const renderer = require('vue-server-renderer').createRenderer();
// 将来渲染器渲染 page 可以得到 html 内容
const page = new Vue({
  data: {
    title: '服务端渲染'
  },
  template: '<div>hello ssr </div>'
});

app.get('/', async (req, res) => {
  try {

    var html = await renderer.rednerToString(page);
    res.end(html)
  } catch (error) {
    res.status(500).end('服务器内部错误');
  }
})

app.listen(3000, () => {
  console.log('running 3000')
})