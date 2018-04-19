const Polix = require('../../../app/');
const Service = Polix.Service;

class UserService extends Service {
  constructor(){
    super();
    this._name = {};
  }

  addUser(userId,name){
    this._name[userId] = name;
    return this;
  }

  getUser(userId){
    return this._name[userId];
  }
}

module.exports = UserService;
