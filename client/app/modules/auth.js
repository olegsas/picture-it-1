angular.module('app.auth', [])

.controller('authCtrl', function($scope, $http) {
    $scope.login = function() {
        $http.post('/login', {
            email: $scope.username,
            password: $scope.password
        })
        .then(res => console.log(res))
    }

    $scope.register = function() {
        $http.post('/register', {
            email: $scope.email,
            name: $scope.username,
            password: $scope.password
        })
        .then(res => console.log(res))
    }
})