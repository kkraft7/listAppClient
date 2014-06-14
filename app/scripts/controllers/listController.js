'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:listController
 * @description
 * # listController
 * Controller of the clientApp
 */
angular.module('clientApp.controllers', [])
  .controller('listController', function ($scope, listApiService) {
    // $scope.mainList = [];
    // UI test code:
/*
    $scope.mainList = [
      { title: 'Item 1', description: 'Description 1' }
    ];
*/
    listApiService.getMainList().success(function (response) {
       $scope.mainList = response.listItems;
    });
  });
