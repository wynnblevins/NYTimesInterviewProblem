angular.module('app')
  .controller('TopStoriesController', ['$scope', 'ArticlesFactory', 'SectionsService', 
    function ($scope, articlesFactory, sectionsService) {
  const itemsPerPage = 10;
  $scope.articles = [];
  $scope.sections = [];
  $scope.predicates = ['title', 'abstract', 'url'];
  $scope.itemsPerPage = itemsPerPage;
  $scope.section = 'home'; // display home section by default 

  retrieveData = () => {
    articlesFactory.requestArticles($scope.section).then((response) => {
      $scope.articles = response.data.results;
    });
  };

  $scope.onSectionChange = (newSection) => {
    $scope.section = newSection;
    retrieveData($scope.section);
  };

  let init = () => {
    $scope.sections = sectionsService.getAllSections();
    retrieveData($scope.section);
  };

  init();
}]);