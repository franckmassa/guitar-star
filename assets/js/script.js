$(document).ready(function(){
  $("#myBtn").click(function(){
      $("#myModal").modal();
  });
});

var guitarApp = angular.module('guitarApp', []);
 guitarApp.controller('guitarCtrl', function($scope, $http){
   $http.get('assets/js/guitare.json').then(function(response){
     $scope.guitars = response.data;
   });
 });
