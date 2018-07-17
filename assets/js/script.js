var guitarApp = angular.module('guitarApp', []);
 guitarApp.controller('guitarCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
   $http.get('assets/js/guitare.json').then(function(response){
     $scope.guitars = response.data;
   });
  $scope.changeFilter = function(newFilter){
      $scope.itemsCategories = newFilter;
  }
  //déclaration des variables
  $scope.quantityProduct = 1;
  //arnaque
  $scope.addProduct = function(){
    $rootScope.basket = {
      items: [{
        name: 'Gibson SG Standard 2018 HC',
        reference: '003',
        price: 1088
      }]
    };
});
