'use strict';

angular.module('probrSiteApp')
    .controller('NavbarCtrl', function ($scope, $location) {

        $scope.isArray = angular.isArray;
        $scope.menu = [
            {
                'title': 'Getting Started',
                'link': [
                    {
                        'name': 'probr-core',
                        'link': 'installation-core'
                    },
                    {
                        'name': 'probr-analysis',
                        'link': 'installation-analysis'
                    }
                ],
            },
            {
                'title': 'Documentation',
                'link': [
                    {
                        'name': 'probr-core',
                        'link': 'docs-core'
                    },
                    {
                        'name': 'probr-analysis',
                        'link': 'docs-analysis'
                    }
                ]
            },
            {
                'title': 'Usage',
                'link': [
                    {
                        'name': 'probr-core',
                        'link': 'usage-core'
                    },
                    {
                        'name': 'probr-analysis',
                        'link': 'usage-analysis'
                    }
                ]
            },
            {
                'title': 'Usecase',
                'link': 'usecase',
            }
        ];


        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.isActiveRoot = function (route) {
            if (angular.isArray(route)) return false;
            route = route.toLowerCase();
            var subStr = $location.path().split("/")[1];
            return route.slice(0, subStr.length) == subStr;
        };

    });
