angular.module('app.home', ['ui.router', 'ngFileUpload'])

.controller('homeCtrl', function($scope, $http, Upload ) {
    $scope.methods = {};
    $scope.images = [];

    $scope.$watch('images', () => {
        console.log($scope.images)
    })

    $scope.$watch('file', function () {
        if ($scope.file != null) {
            Upload.upload({ url: '/image', data: { image: $scope.file } })
                .then(res => {
                    console.log(res)
                    if (res.status = 200)
                        $scope.images.push({url: res.data})
                } );
        }
    });

    $http.get('/images')
        .then(images => {
            images.data.forEach(img => {
                $scope.images.push({url: 'uploads/' + img})
            })
        })
        .catch(err => console.log(err))
})