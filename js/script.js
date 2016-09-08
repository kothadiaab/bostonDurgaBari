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
        .when('/drama_checked_in', {
            templateUrl : 'views/drama_checked_in.html'
        })
});

bdbApp.controller('ourVisionController', function($scope) {
    // create a message to display in our view
});

bdbApp
    .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }])
    .controller('homeController', ['$anchorScroll', '$location', '$scope',
    function($anchorScroll, $location, $scope){
        this.hCtrl = 1;

        this.setTab = function (tabId) {
            this.hCtrl = tabId;
        };

        $scope.initMap = function () {
            var mapDiv = document.getElementById('map');
            var myLatLng = {lat: 42.184154, lng: -70.997325};
            var map = new google.maps.Map(mapDiv, {
                center: myLatLng,
                zoom: 12
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map
            });
        }

        this.isSet = function (tabId) {
            return this.hCtrl === tabId;
        };

        this.goToEvent = function(x){
            //alert(x);
            var newHash = x;
            if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(x);
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        }
    }]);

$("#image_puja").click(function(){
    $("#day1Puja").addClass("in");
    $("#day1Food").removeClass("in");
    $("#day1Culture").removeClass("in");
});

$("#image_food").click(function(){
    $("#day1Food").addClass("in");
    $("#day1Puja").removeClass("in");
    $("#day1Culture").removeClass("in");
});

$("#image_classical, #image_odissi, #image_shuddhaswar").click(function(){
    $("#day1Food").removeClass("in");
    $("#day1Puja").removeClass("in");
    $("#day1Culture").addClass("in");
});

$("#image_shuddhaswar").click(function(){
    $("#day2Food").removeClass("in");
    $("#day2Puja").removeClass("in");
    $("#day2Culture").addClass("in");
});