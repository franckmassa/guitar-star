var guitarApp = angular.module('guitarApp', []);
 guitarApp.controller('guitarCtrl', function($scope, $http){
   $http.get('assets/js/guitare.json').then(function(response){
     $scope.guitars = response.data;
 });
  $scope.changeFilter = function(newFilter){
      $scope.itemsCategories = newFilter;
  }
  //déclaration des variables
  $scope.quantityProduct = 1;
  //les données vont dedans
  $scope.basket = {};
  $scope.quantity = {};
  //fonction qui ajoute au panier
  $scope.addProduct = function(index, param){
    $scope.basket[index] = param;
    //condition qui ajoute au panier qd pas dedans ou qui incremente la quantité
    if(index in $scope.quantity){
      $scope.quantity[index] += 1;
    }else{
      $scope.quantity[index] = 1;
    }
  };
});
