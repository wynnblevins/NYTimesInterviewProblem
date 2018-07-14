angular.module('app')
  .controller('TopStoriesController', ['$scope', 'ArticlesFactory', 
    function ($scope, ArticlesFactory) {
  const itemsPerPage = 10;
  $scope.articles = [];
  $scope.predicates = ['title', 'abstract', 'url'];
  $scope.itemsPerPage = itemsPerPage;
  
  retrieveData = () => {
    ArticlesFactory.getAllArticles().then((response) => {
      $scope.articles = response.data.results;
    });
  };

  let init = () => {
    retrieveData();
  };

  init();
}]);