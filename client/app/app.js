angular.module('app', [
    'app.home',
    'app.about',
    'ui.router',
    'ngAnimate',
    'thatisuday.ng-image-gallery',
    'ngFileUpload'
])

.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {

    }
])

.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'aboutCtrl'
            })

    }
])

// .controller('homeController', function($scope){
//     $scope.message = 'Hello World';
// });