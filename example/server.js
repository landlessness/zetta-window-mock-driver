var zetta = require('zetta');
var Window = require('../index');
var style = require('./apps/style');

zetta()
  .use(Window)
  .use(style)
  .listen(1337);
