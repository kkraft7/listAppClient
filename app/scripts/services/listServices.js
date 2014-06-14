angular.module('clientApp.services', []).
  factory('listApiService', function($http) {
    var listApi = {};
    // How to factor out web calls with a URL param?
    listApi.getMainList = function() {
      return $http({
        method: 'GET', 
        url: 'http://localhost:8080/main-list'
      });
    };
    return listApi;
  });
