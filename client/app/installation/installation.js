'use strict';

angular.module('probrSiteApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('installation', {
                url: '/installation',
                templateUrl: 'app/installation/installation.html',
                controller: 'InstallationCtrl'
            })
            .state('installation-core', {
                url: '/installation/core',
                templateUrl: 'app/installation/installation-core.html',
                controller: 'InstallationCoreCtrl'
            })
            .state('installation-analysis', {
                url: '/installation/analysis',
                templateUrl: 'app/installation/installation-analysis.html',
                controller: 'InstallationAnalysisCtrl'
            })
        ;
    });
