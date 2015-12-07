'use strict';

angular.module('probrSiteApp')
    .controller('InstallationCtrl', function ($scope) {

    })
    .controller('InstallationCoreCtrl', function ($scope) {
        $scope.installation = 'docker';
    })
    .controller('InstallationAnalysisCtrl', function ($scope) {
        $scope.installation = 'docker';
    });
