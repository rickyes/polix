const { Tool } = require('../utils/');

module.exports = {
  polix: Tool.buildEnum({
    SERVICE: 'service',
    CONTROLLER: 'controller'
  }),
  HTTP: Tool.buildEnum({
    GET: 'get',
    POST: 'post'
  }),
  PATH: Tool.buildEnum({
    MIDDWARE: 'middware',
    PLUGIN: 'plugin'
  }),
};
