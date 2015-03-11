'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices',
    'restangular',
    'TestModule'
]);

phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl as phoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl as phoneDetailCtrl'
            }).
            otherwise({
                templateUrl: 'partials/test.html',
                controller : 'TestController as ctrl'



            });
    }]);
