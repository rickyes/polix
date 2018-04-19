const enumType = require('./lib/enum').polix;

class App {

  constructor(){
    this._service = {};
    this._controller = {};
    this.service = {};
    this.controller = {};
    this._store = {};
  }

  addService(key,service){
    let self = this;
    this._service[key] = service;
    Object.defineProperty(this.service,key,{
      get(){
        self._store[`${enumType.SERVICE}-${key}`] = self._store[`${enumType.SERVICE}-${key}`] || new self._service[key]();
        return self._store[`${enumType.SERVICE}-${key}`];
      },
      set(){
        throw new TypeError(' this function readonly ');
      }
    });
    return this;
  }

  getService(key){
    return this._service[key];
  }

  addController(key,controller){
    let self = this;
    this._controller[key] = controller;
    Object.defineProperty(this.controller,key,{
      get(){
        self._store[`${enumType.CONTROLLER}-${key}`] = self._store[`${enumType.CONTROLLER}-${key}`] || new self._controller[key]();
        return self._store[`${enumType.CONTROLLER}-${key}`];
      },
      set(){
        throw new TypeError(' this function readonly ');
      }
    });
    return this;
  }

  getController(key){
    return this._controller[key];
  }

  list(){
    return { service: this._service, controller: this._controller };
  }

};

let applicetion = new App();

module.exports = applicetion;
