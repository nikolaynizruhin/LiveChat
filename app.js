var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
  
  var ref = new Firebase("https://au3kez6j8sq.firebaseio-demo.com/");
  
  $scope.messages = $firebaseArray(ref);
  
  $scope.addMessage = function() {
    var from = $scope.from || 'anonymous';
    
    $scope.messages.$add({
      from: from,
      body: $scope.body
    });
    
    $scope.body = ""
  }
}]);
