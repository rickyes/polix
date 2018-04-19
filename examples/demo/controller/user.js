const Polix = require('../../../app/');
const Controller = Polix.Controller;

class UserController extends Controller {
  constructor(){
    super();
    this.app.service.user.addUser(1,'zhoumq');
    console.log(this.app.service.user.getUser(1));
  }
}

module.exports = UserController;
