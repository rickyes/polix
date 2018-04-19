const fs = require('fs');
const path = require('path');
const conf = require('./config/config.default');
const app = require('./application');
const tool = require('./utils/tool');

const TYPE = tool.buildEnum({
  'controller': 'controller',
  'service': 'service',
});

/**
 * 加载service 和 controller
 */
exports.loadBase = function(type,filePath){
  filePath = filePath || path.join(conf.root,`../../examples/demo/${type}`);
  let files = fs.readdirSync(filePath);
  files.map(file => {
    app[`add${tool.firstUpperCase(type)}`](file.substring(0,file.length - 3),require(path.join(filePath,file)));
  });
};


exports.load = function(){
  exports.loadBase(TYPE.controller);
  exports.loadBase(TYPE.service);
};
