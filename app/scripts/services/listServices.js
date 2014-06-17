angular.module('clientApp.services', []).
    factory('listApiService', function($http) {   // getMainList() failed when I added $scope as a parameter here
        var listApi = {};
        // Factor out a version that takes a URL param
        listApi.getMainList = function() {
            return $http.get( "http://localhost:8080/main-list" );
        };

        listApi.postListItem = function( newTitle, newDescription ) {
            var newListItem = { title: newTitle, description: newDescription };
            return $http.post( "http://localhost:8080/main-list", newListItem );
        };

        return listApi;
    });
