/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'blog',
  lazyLoading: false,
  isDevelopingAddon: function() {
    return true;
  }
});
