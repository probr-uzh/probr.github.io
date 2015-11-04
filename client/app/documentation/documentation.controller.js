'use strict';

angular.module('probrSiteApp')
  .controller('DocumentationCtrl', function ($scope, $http) {

    $http.get('assets/readme/core.md')
      .success(function (data) {
        $scope.probrCoreMarkdown = data;
      }).error(function () {

    });

  });
