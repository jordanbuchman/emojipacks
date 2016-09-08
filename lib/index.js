var Slack = require('../lib/slack');
var Pack = require('../lib/pack');
var co = require('co');

function url(subdomain) {
  return 'https://' + subdomain + '.slack.com';
}

exports.upload = co.wrap(function* (subdomain, email, password, emojis) {
  var user = {
    url: url(subdomain),
    email: email,
    password: password,
    emojis: emojis
  };
  var slack = new Slack(user, null);
  yield slack.import();
  return;
});
