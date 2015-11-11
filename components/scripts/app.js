// Create Angular module
var cwicscore = angular.module("cwicscore", ["firebase"]);

// Angular controller
cwicscore.controller("mainCtrlr", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

  var fbRef = new Firebase("https://cwicscore.firebaseio.com/");

  $scope.over = $firebaseArray(fbRef);


}]);