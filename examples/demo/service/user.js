const { Service } = require('../../../app');

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
