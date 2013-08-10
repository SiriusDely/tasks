define([], function() {
  var config = {};
  config.apiKey = 'AIzaSyB0HYfCKumaeYYKY17kzhsO9Ie5F50hkBQ';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '1071091425154.apps.googleusercontent.com';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  
  return config;
});
