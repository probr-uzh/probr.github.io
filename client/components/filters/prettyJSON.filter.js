'use strict';

angular.module('probrSiteApp')
    .filter('prettyJSON', function () {
        function prettyPrintJson(json) {
            return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
        }

        return prettyPrintJson;
    });