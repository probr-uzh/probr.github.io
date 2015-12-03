'use strict';

angular.module('probrSiteApp')
    .controller('DocumentationCtrl', function ($scope, $http) {


    })
    .controller('DocumentationCoreCtrl', function ($scope, $http) {

        $http.get('assets/readme/core.md')
            .success(function (data) {
                $scope.probrMarkdown = data;
            }).error(function () {

        });

    })
    .controller('DocumentationAnalysisCtrl', function ($scope, $http) {

        $http.get('assets/readme/analysis.md')
            .success(function (data) {
                $scope.probrMarkdown = data;
            }).error(function () {

        });

    });
