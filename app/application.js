const enumType = require('./lib/enum').polix;
const ctx = require('./extends/application');
const log = require('./lib/log');
const { conf,Tool } = require('./utils/');
const path = require('path');
const middleware = require('./middleware');

class App {

  constructor(){
    conf.setRoot(path.dirname(require.main.filename));
    Object.defineProperties(this,{
      _service: {
        writable: true,
        configurable: true,
        enumerable:false,
        value: {}
      },
      _controller: {
        writable: true,
        configurable: true,
        enumerable:false,
        value: {}
      },
      _store: {
        writable: true,
        configurable: true,
        enumerable:false,
        value: {}
      }
    });
    this.service = {};
    this.controller = {};
    this.ctx = new ctx();
    middleware.bind(this.ctx);
    let port = conf.config.base.port;
    this.config = conf.config;
    this.ctx.listen(port);
    log.listen(log.color.yellow('start server'),log.color.green('|'), log.color.red(`${port}`));
  }

  addMiddwares(middware){
    if(!Tool.isType(Tool.TYPE.Object,middware)) throw new TypeError('middware is not object');
    Object.getOwnPropertyNames(middware).map(m => {
      this.ctx.use(middware[m]());
    });
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

}

let applicetion = new App();

module.exports = applicetion;
