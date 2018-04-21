# Polix

Node.js Web Framework

[![Build Status](https://travis-ci.org/zhoumingque/polix.svg?branch=master)](https://travis-ci.org/zhoumingque/polix)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/polix)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://www.npmjs.com/package/polix)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fzhoumingque%2Fpolix.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fzhoumingque%2Fpolix?ref=badge_shield)

`polix`是基于`koa v2.5.0`的`IOC`框架,和平常的`Node.js Web Framework`相比，它无需另外绑定路由集合，开发简单，依照`java`的著名依赖注入框架`spring`来制作，让开发者专注于逻辑。`polix`采用多服务多进程架构来保证服务的稳定和快速响应能力，每个`controller`都是一个独立的服务，各服务之间采用`RPC`来通信，这一点借鉴了`pomelo`的架构，不同的是，`polix`采用的是`google`的`gRPC`实现服务通信。`polix`的中间件和`koa v2.x`的中间件保持兼容。`polix`提供`Dockerfile`+`docker-compose.yml`方案进行部署，默认使用的`ORM`是`sequelize`(后续会提供`polix-orm`)。开发者可以选择ES6/7/8 或者 TypeScript来进行开发。

## Install

[![NPM](https://nodei.co/npm/polix.png?compact=true)](https://nodei.co/npm/polix/)

```bash
$ npm i polix --save
```

## Dev
`目前正在开发中，仅实现了Get动词（实现方式需要调整）`
```javascript
const { Controller,Get } = require('polix');

class UserController extends Controller {

  constructor(){
    super();
  }


  @Get
  addUser(ctx){
    let req = ctx.request;
    let msg = req.query;
    this.service.user.addUser(msg.userId,msg.name);
    ctx.body = {
      result: 'ok'
    };
  }

  @Get
  getUser(ctx){
    let req = ctx.request;
    let msg = req.query;
    ctx.body = {
      user: this.service.user.getUser(msg.userId)
    };
  }

}
```

## Start

```bash
$ npm run dev
```

## Author
Polix © [Allen泽阳](https://github.com/zhoumingque), Released under the MIT License.  

Authored and maintained by [Allen泽阳](https://github.com/zhoumingque) with help from contributors ([list](https://github.com/zhoumingque/polix/graphs/contributors)).
> [zhoumq.cn](http://git.zhoumq.cn) · GitHub [@zhoumq](https://github.com/zhoumingque)
