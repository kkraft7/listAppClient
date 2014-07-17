'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # Early iteration of list app client side
 *
 * Main module of the application.
 */
angular
    .module('clientApp', [
        'clientApp.controllers',
        'clientApp.services',
        'ngResource',
        'ngRoute',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'listController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        });
