angular.module('app')
  .controller('TopStoriesController', ['$scope', 'ArticlesFactory', 'SectionsService', 
    function ($scope, articlesFactory, sectionsService) {
  const itemsPerPage = 10;
  $scope.articles = [];
  $scope.sections = [];
  $scope.itemsPerPage = itemsPerPage;
  $scope.section = 'home'; // display home section by default 
  $scope.showLoader = false;
  
  retrieveData = () => {
    $scope.showLoader = true;
    
    articlesFactory.requestArticles($scope.section).then((response) => {
      $scope.articles = response.data.results;
      $scope.showLoader = false;
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