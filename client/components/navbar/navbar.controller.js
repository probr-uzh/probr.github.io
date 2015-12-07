'use strict';

angular.module('probrSiteApp')
    .controller('NavbarCtrl', function ($scope, $location) {

        $scope.menu = [
            {
                'title': 'Getting Started',
                'link': 'installation'
            },
            {
                'title': 'Documentation',
                'link': 'docs'
            },
            {
                'title': 'FAQ',
                'link': 'faq'
            },
            {
                'title': 'Usecase',
                'link': 'usecase'
            }
        ];

        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.isActiveRoot = function (route) {
            route = route.toLowerCase();
            var subStr = $location.path().split("/")[1];
            return route.slice(0, subStr.length) == subStr;
        };

    });
