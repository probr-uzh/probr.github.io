'use strict';

angular.module('probrSiteApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('usage', {
                url: '/usage',
                templateUrl: 'app/usage/usage.html',
                controller: 'UsageCtrl'
            })
            .state('usage-core', {
                url: '/usage/core',
                templateUrl: 'app/usage/usage-core.html',
                controller: 'UsageCoreCtrl'
            })
            .state('usage-analysis', {
                url: '/usage/analysis',
                templateUrl: 'app/usage/usage-analysis.html',
                controller: 'UsageAnalysisCtrl'
            })
        ;
    });
