var Class  = require('uclass');
var net    = require('net');
var Server = require('./_server');

var DroneFeed = new Class({
  Extends : Server,

  options : {
    videoStream : null,
  },

  get_feed : function(){

    return this.options.videoStream;
  },

});



module.exports = DroneFeed;
