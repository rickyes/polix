class App {

  constructor(){
    this.service = {};
    this.controller = {};
  }

  addService(key,service){
    this.service[key] = service;
    return this;
  }

  getService(key){
    return this.service[key];
  }

  addController(key,controller){
    this.controller[key] = controller;
    return this;
  }

  getController(key){
    return this.controller[key];
  }

};

module.exports = App;
