'use strict';

angular.module('probrSiteApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('docs', {
                url: '/docs',
                templateUrl: 'app/documentation/documentation.html',
                controller: 'DocumentationCtrl'
            })
            .state('docs-core', {
                url: '/docs/core',
                templateUrl: 'app/documentation/documentation-core.html',
                controller: 'DocumentationCoreCtrl'
            })
            .state('docs-analysis', {
                url: '/docs/analysis',
                templateUrl: 'app/documentation/documentation-analysis.html',
                controller: 'DocumentationAnalysisCtrl'
            });
    });
