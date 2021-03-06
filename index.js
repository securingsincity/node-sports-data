var codeShipHTTP = require('./lib/SportsDataHTTP.js'),
  _ = require('lodash');


var CodeShipClient = function(options) {
  if (!options.apiKey) {
    throw 'must specify api key';
  }
  this.apiKey = options.apiKey;
  _.extend(this, codeShipHTTP);
};

module.exports = CodeShipClient;