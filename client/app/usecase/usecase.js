'use strict';

angular.module('probrSiteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('usecase', {
        url: '/usecase',
        templateUrl: 'app/usecase/usecase.html',
        controller: 'UsecaseCtrl'
      });
  });
