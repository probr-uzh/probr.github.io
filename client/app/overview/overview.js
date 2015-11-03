'use strict';

angular.module('probrSiteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewCtrl'
      });
  });
