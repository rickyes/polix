const fs = require('fs');
const path = require('path');
const conf = require('./config/config.default');
const app = require('./application');
const { Tool } = require('./utils/');

const TYPE = Tool.buildEnum({
  'controller': 'controller',
  'service': 'service',
});

/**
 * 加载service 和 controller
 */
exports.loadBase = function(type){
  let filePath = path.dirname(require.main.filename);
  filePath = path.join(filePath,type);
  let files = fs.readdirSync(filePath);
  files.map(file => {
    app[`add${Tool.firstUpperCase(type)}`](file.substring(0,file.length - 3),require(path.join(filePath,file)));
  });
};


exports.load = function(){
  exports.loadBase(TYPE.controller);
  exports.loadBase(TYPE.service);
};
