/**
 * Created by abhedkothadia on 8/9/16.
 */

var app = angular.module('bdbApp', ["ngRoute"]);

app.controller("bdbController", bdbControllerFucntion);

function bdbControllerFucntion($scope){
    $scope.firstName = "Boston";
    $scope.lastName = "Durga Puja";
}