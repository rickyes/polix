/**
 * 读取配置文件
 * 约定：
 * 1、根目录下config文件夹下
 * 2、servers.json为服务器配置文件
 * 3、mysql.json为数据库配置文件
 * 4、支持自定义.json配置文件
 */

const fs = require('fs');
const {
  Tool
} = require('../utils/');
const enums = require('./enums');
const path = require('path');

exports.inspect = function(){
  let has = fs.existsSync(path.join(__dirname,enums.CONFIG.SERVER));
};
