'use strict';

angular.module('probrSiteApp')
    .controller('UsageCtrl', function ($scope) {

    })
    .controller('UsageCoreCtrl', function ($scope) {
        $scope.installation = 'docker';
    })
    .controller('UsageAnalysisCtrl', function ($scope) {
        $scope.installation = 'docker';
    });
