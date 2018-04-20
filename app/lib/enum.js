const { Tool } = require('../utils/');

module.exports = {
  polix: Tool.buildEnum({
    SERVICE: 'service',
    CONTROLLER: 'controller'
  }),
};
