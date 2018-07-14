angular.module('app').service('SectionsService', function () {
  this.getAllSections = function () {
    let sections = [
      'home',
      'opinion',
      'world',
      'national',
      'politics',
      'upshot',
      'nyregion',
      'business',
      'technology',
      'science',
      'health',
      'sports',
      'arts',
      'books',
      'movies',
      'theater',
      'sundayreview',
      'fashion',
      'tmagazine',
      'food',
      'travel',
      'magazine',
      'realestate',
      'automobiles',
      'obituaries',
      'insider'
    ];

    return sections;
  }
});