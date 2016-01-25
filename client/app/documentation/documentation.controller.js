'use strict';

angular.module('probrSiteApp')
    .controller('DocumentationCtrl', function ($scope, $http) {


    })
    .controller('DocumentationCoreCtrl', function ($scope, $http) {

        var listTemplate = {
            "count": 2,
            "next": null,
            "previous": null,
        };

        $scope.jwtObj = {username: '', password: ''};

        $scope.deviceObj = {};
        $scope.deviceObj['GET'] = 'Device Object';
        $scope.deviceObj['GET/LIST'] = angular.extend(listTemplate, {results: ['Device Object #1', 'Device Object #2']});

        $scope.statusObj = {};
        $scope.statusObj['GET'] = 'Status Object';
        $scope.statusObj['GET/LIST'] = angular.extend(listTemplate, {results: ['Status Object #1', 'Status Object #2']});

        $scope.commandObj = {};
        $scope.commandObj['GET'] = 'Command Object';
        $scope.commandObj['GET/LIST'] = angular.extend(listTemplate, {results: ['Command Object #1', 'Command Object #2']});

        $scope.templateObj = {};
        $scope.templateObj['GET'] = 'Template Object';
        $scope.templateObj['GET/LIST'] = angular.extend(listTemplate, {results: ['Template Object #1', 'Template Object #2']});

        $scope.deviceCaptureObj = {};
        $scope.deviceStatusObj = {};
        $scope.deviceCommandObj = {};



    })
    .controller('DocumentationAnalysisCtrl', function ($scope, $http) {

    });
