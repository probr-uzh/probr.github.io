'use strict';

angular.module('probrSiteApp')
    .directive("restApi", function restApi() {
        return {
            scope: {
                methods: "=",
                path: "=",
                payload: "=",
                name: "="
            },
            templateUrl: 'components/directives/restApi.html',
            link: function restApi(scope, element) {
                scope.displayedMethod = scope.methods[0];
                scope.switch = function (method) {
                    scope.displayedMethod = method;
                }
            }
        };
    })
    .filter('trimByMethod', function () {
        return function trimByMethod(path, method) {
            if (method == 'POST' || method == 'GET/LIST') {
                if (path.indexOf(':') > -1) {
                    return path.substr(0, path.indexOf(':'));
                }
            }
            return path;
        };
    });