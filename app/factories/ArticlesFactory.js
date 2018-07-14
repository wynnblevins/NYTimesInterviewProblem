angular.module('app')
  .factory('ArticlesFactory', 
    ['$http', '$q', function ($http, $q) {
  let articlesFactory = {};

  articlesFactory.getAllArticles = () => {
    const API_KEY = 'e8d7b2a2149143378f5d20b5f78bf0ee';
    let url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    url += `?api-key=${API_KEY}`;
    
    return $http({
      method: 'GET',
      url: url 
    });
  }

  return articlesFactory;
}]);