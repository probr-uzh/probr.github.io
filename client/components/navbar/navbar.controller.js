'use strict';

angular.module('probrSiteApp')
  .controller('NavbarCtrl', function ($scope, $location) {

    $scope.menu = [
      {
        'title': 'Overview',
        'link': 'overview'
      },
      {
        'title': 'Documentation',
        'link': 'docs'
      },
      {
        'title': 'FAQ',
        'link': 'faq'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      return route === $location.path();
    };

    $scope.isActiveRoot = function (route) {
      var subStr = $location.path().split("/")[1];
      return route.indexOf(subStr.substr(0, subStr.length - 1)) !== -1;
    };

  });
