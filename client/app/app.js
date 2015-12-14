'use strict';

angular.module('probrSiteApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'btford.socket-io',
        'ui.router',
        'ui.bootstrap',
        'hc.marked'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('overview');
        $locationProvider.html5Mode(false);
    });
