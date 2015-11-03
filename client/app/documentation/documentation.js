'use strict';

angular.module('probrSiteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('docs', {
        url: '/docs',
        templateUrl: 'app/documentation/documentation.html',
        controller: 'DocumentationCtrl'
      });
  });
