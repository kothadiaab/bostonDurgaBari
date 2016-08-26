/**
 * Created by abhedkothadia on 8/9/16.
 */

var bdbApp = angular.module('bdbApp', ['ngRoute']);

//app.controller("bdbController", bdbControllerFucntion);
//
//function bdbControllerFucntion($scope){
//    $scope.firstName = "Boston";
//    $scope.lastName = "Durga Puja";
//}
bdbApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : "views/home.html",
            controller  : 'homeController',
            controllerAs: 'hCtrl'
        })
        .when('/our-vision', {
            templateUrl : "views/our-vision.html",
            controller  : 'ourVisionController'
        })
        .when('/contact-us', {
            templateUrl : 'views/contact-us.html'
        })
        .when('/event-ads', {
            templateUrl : 'views/event-ads.html'
        })
        .when('/our-events', {
            templateUrl : 'views/our-events.html'
        })
});

bdbApp.controller('ourVisionController', function($scope) {
    // create a message to display in our view
});

bdbApp.controller('homeController', function($scope){
    this.hCtrl = 1;

    this.setTab = function (tabId) {
        this.hCtrl = tabId;
    };

    this.isSet = function (tabId) {
        return this.hCtrl === tabId;
    };
});