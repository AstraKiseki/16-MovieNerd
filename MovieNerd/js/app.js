angular.module('app', []);

angular.module('app').controller('indexController', function ($scope, $http) {

    console.log('issuing http get');

    $scope.searchTerm = '';

    $http.get('http://www.omdbapi.com/?s=' + $scope.SearchTerm + '&page=2')
.success(function (data) {
    console.log(data);
})
.error(function (error) {
    alert(error);
}
);

});