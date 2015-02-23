angular.module('element1', []);

var app = angular.module('element1');

app.controller('UsersController', function ($scope, $http) {
    $http.get('http://localhost:9876/api/users')
        .success(function (users) {
            $scope.users = users;
        });

    $scope.createUser = function(username) {
        var user = {username: username};
        $http.post('http://localhost:9876/api/users', user)
            .success(function(storedUser) {
                $scope.users.push(storedUser);
            });
    };
});
