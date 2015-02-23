angular.module('element1', [

]);

var app = angular.module('element1');

app.controller('UsersController', function($scope) {
    $scope.users = [
        {username: 'Kanin'},
        {username: 'koker'}
    ];
});
