//This is how we declare a new module for angular.
// angular is VERY important -- its tell angular that we area talking to it.
// the 'myApp' in the parameters so that it knows when we use that variable that we are doing this call.
// the empty brackets signify grabbing the dependencies we need
// controller is additional functionality that we want to add.
var myApp = angular.module('myApp',[] ); // angular.module is export this module to be used in the HTML

//the ng-controller in the html is calling this .controller by using the "WelcomeController"
myApp.controller("WelcomeController", ["$scope", function($scope){
    $scope.heading = "Message: ";

    $scope.updateMessage = function(){
        $scope.message = "Hello " + $scope.name + "!";
    };

    $scope.goodByeMessage = function(){
      $scope.message = "Goodbye, " + $scope.name + " :(";
    };

}]);