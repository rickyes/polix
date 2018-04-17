const fs = require('fs');

/**
 * 加载service
 * @param path service文件路径
 */
exports.loadServices = function(filePath){
  filePath = filePath || __dirname;
  let files = fs.readdirSync(filePath);
  console.log(files);
};
