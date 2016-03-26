var Device = require('zetta-device');
var util = require('util');

var Window = module.exports = function() {
  Device.call(this);
};
util.inherits(Window, Device);

Window.prototype.init = function(config) {
  config
    .name('Window')
    .type('window')
    .state('closed')
    .when('opened', {allow: ['close']})
    .when('closed', {allow: ['open']})
    .map('open', this.open)
    .map('close', this.close);

};

Window.prototype.open = function(cb) {
  this.state = 'opened';
  cb();
}

Window.prototype.close = function(cb) {
  this.state = 'closed'
  cb();
}
