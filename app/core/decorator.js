const app = require('../application');
const Router = require('koa-router');
const router = new Router();
const { HTTP } = require('../lib/enum');

function Get(target, key, descriptor) {
  build(target,key,descriptor);
  return descriptor;
}

function Post(target, key, descriptor) {
  build(target,key,descriptor,HTTP.POST);
  return descriptor;
}

function Put(target, key, descriptor){
  build(target, key, descriptor, HTTP.PUT);
  return descriptor;
}

function Del(target, key, descriptor){
  build(target, key, descriptor, HTTP.DEL);
  return descriptor;
}

function build(target,key,descriptor,type = HTTP.GET){
  let base = target.constructor.name.toLowerCase();
  base = base.split('controller')[0];
  const ctx = app.ctx;
  const method = descriptor.value;
  router[type](`/${base}/${key}`, method.bind(app));
  ctx.use(router.routes()).use(router.allowedMethods());
}

module.exports = {
  Get,
  Post,
  Put,
  Del
}
