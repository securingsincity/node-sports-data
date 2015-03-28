var request = require('request'),
  BASE_URL = 'http://api.sportsdatallc.org/mlb-t5/',
  API_KEY_HELPER = '?api_key=',
  _ = require('lodash');

module.exports  = {
  teamRosters : function (callback) {
    if (!this.apiKey) {
      throw 'must specify api key';
    }
    var url = BASE_URL+"league/full_rosters.json"+API_KEY_HELPER+this.apiKey;
    request({url:url, json:true}, function (err,httpResponse,body) {
      return callback(body);
    });
  },
  player : function (playerId,callback) {
    if (!this.apiKey) {
      throw 'must specify api key';
    }
    if (!playerId) {
      throw 'must specify player id';
    }
    var url = BASE_URL+"players/"+playerId+"/profile.json"+API_KEY_HELPER+this.apiKey;
    request({url:url, json:true}, function (err,httpResponse,body) {
      return callback(body);
    });
  }
};