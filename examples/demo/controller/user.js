const { Controller,Get,Post } = require('../../../app');

class UserController extends Controller {

  constructor(){
    super();
  }

  @Post
  addUser(ctx){
    let req = ctx.request;
    let msg = req.body;
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

  @Get
  getInfo(ctx){
    ctx.body = {
      v: 'v1.0'
    }
  }
}

module.exports = UserController;
