//引入koa框架
const koa = require('koa');
const http = require('http');

//引入路由中间件
const Route = require('koa-router');

const app = new koa();

app.listen('8080', () => {
    console.log('成功连接到8080')
});