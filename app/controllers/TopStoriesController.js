angular.module('app')
  .controller('TopStoriesController', ['$scope', 'ArticlesFactory', 
    function ($scope, ArticlesFactory) {
  $scope.articles = [];
  
  retrieveData = () => {
    ArticlesFactory.getAllArticles().then((response) => {
      $scope.articles = response.data.results;
    });
  };

  $scope.refreshClick = () => {
    $scope.articles = [];
    retrieveData();
  };

  let init = () => {
    retrieveData();
    $scope.predicates = ['title', 'abstract', 'url'];
    
  };

  init();
}]);