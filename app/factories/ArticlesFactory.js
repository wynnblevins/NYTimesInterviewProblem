angular.module('app')
  .factory('ArticlesFactory', 
    ['$http', 'APIKeyService', function ($http, apiKeyService) {
  let articlesFactory = {};

  articlesFactory.requestArticles = (section) => {
    const API_KEY = apiKeyService.getAPIKey();
    let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json`;
    url += `?api-key=${API_KEY}`;
    
    return $http({
      method: 'GET',
      url: url 
    });
  }

  return articlesFactory;
}]);