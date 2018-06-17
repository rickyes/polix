/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const should = require('should');
const utils = require('../app/utils/tool');
const Loads = require('../app/load');
const path = require('path');

describe('Loads Function', function () {

  describe('#loadServices', function () {
    it('load service file', function () {

      Loads.loadServices(path.join(__dirname,'../examples/demo/services'));

    });
  });

});
