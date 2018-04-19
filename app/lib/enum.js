const tool = require('../utils/tool');

module.exports = {
  polix: tool.buildEnum({
    SERVICE: 'service',
    CONTROLLER: 'controller'
  }),
};
