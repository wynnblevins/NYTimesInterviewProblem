angular.module('app').service('APIKeyService', function () {
  const APIKey = 'e8d7b2a2149143378f5d20b5f78bf0ee';
  
  this.getAPIKey = function () {
    return APIKey;
  }
});