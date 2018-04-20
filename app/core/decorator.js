const app = require('../application');
const Router = require('koa-router');
const router = new Router();

function Get(target, key, descriptor) {
  const ctx = app.ctx;
  const method = descriptor.value;
  router.get(`/${key}`, method.bind(app));
  ctx.use(router.routes()).use(router.allowedMethods());
  return descriptor;
}

module.exports = {
  Get
}
