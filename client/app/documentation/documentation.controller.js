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

        var locationSample = {"_id":"566ee9bf50dbe11300703759","multiplier":1.0129218750000004,"noOfCircles":3,"area":0.67,"location":{"coordinates":[8.549603298636361,47.41450563092935],"type":"Point"},"time":"2015-11-16T15:40:00.000Z","mac_address":"--","tags":["seallab","odroid","demo"],"derivedFrom":[{"long":8.54959,"lat":47.414517,"weightedSignal":-42,"cnt":2},{"long":8.549587,"lat":47.414482,"weightedSignal":-46,"cnt":2},{"long":8.54964025950721,"lat":47.4144933237122,"weightedSignal":-46,"cnt":2}],"__v":0};
        var packetSample = {"_id":"56a778211588c6000cf00350","mac_address_src":"--","time":"2016-01-26T13:43:59.890Z","tags":["seallab","odroid","demo"],"capture_uuid":"8da797ef-f146-4dd2-9b9f-94d4a9919e12","inserted_at":"2016-01-26T13:44:01.469Z","mac_address_dst":"ffffffffffff","signal_strength":-78,"location":{"type":"Point","coordinates":[8.54959,47.414517]},"fragment_number":0,"sequence_number":3346,"ssid":"eduroam"};

        $scope.deviceObj = {};
        $scope.deviceObj['GET/LIST'] = ['Device Object #1', 'Device Object #2'];

        $scope.locationObj = {};
        $scope.locationObj['GET/LIST'] = [locationSample, locationSample];

        $scope.packetObj = {};
        $scope.packetObj['GET/LIST'] = [packetSample, packetSample];

        $scope.sessionObj = {};
        $scope.sessionObj['GET/LIST'] = [
            {"_id":"56a777b940af3d5cb025ab2f","mac_address":"-","startTimestamp":"2015-11-16T15:42:42.496Z","endTimestamp":"2015-11-16T16:57:41.656Z","count":41,"tags":["seallab","odroid","demo"],"weightedSignalStrength":-49,"duration":4499},
            {"_id":"56a777b840af3d5cb0258d26","mac_address":"-","startTimestamp":"2015-11-16T15:40:45.439Z","endTimestamp":"2015-11-16T17:36:45.454Z","count":32,"tags":["seallab","odroid","demo"],"weightedSignalStrength":-49,"duration":6960}];


        $scope.sessionReduceObj = {};
        $scope.sessionReduceObj['GET/LIST'] = [{"_id":"2016-01-17T13:40:00.000Z","value":2},{"_id":"2016-01-17T13:45:00.000Z","value":2}]

    });
