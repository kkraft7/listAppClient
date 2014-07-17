'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:listController
 * @description
 * # listController
 * Controller for the clientApp
 */
angular.module('clientApp.controllers', [])
    .controller('listController', function ( $scope, $route, listApiService ) {
        // UI test code:
        $scope.mainList = [];

        getListItems();     // When/how does this get called? Initial page load?

        $scope.refresh = function() { getListItems() };

        function getListItems() {
            listApiService.getMainList().success(function (response) {
                $scope.mainList = response.listItems;
            });
            // Add failure() handler?
        }

        $scope.postListItem = function( newTitle, newDescription ) {
            // var newListItem = { title: newTitle, description: newDescription };
            listApiService.postListItem( newTitle, newDescription ).success( function( newListItem ) {
                alert( "List item added" );
                $scope.mainList.push( newListItem );
                // $route.reload(); // Trying to avoid getting whole list from server every time
                // Can I factor out a drawList() routine?
                getListItems();
            });
            // Add failure() handler?
        };

       // Define getListItem(), deleteListItem(), updateListItem()?
    });
