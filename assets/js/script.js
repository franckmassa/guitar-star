var guitarApp = angular.module('guitarApp', []);
 guitarApp.controller('guitarCtrl', function($scope, $http){
   $http.get('assets/js/guitare.json').then(function(response){
     $scope.guitars = response.data;
 });
  $scope.changeFilter = function(newFilter){
      $scope.itemsCategories = newFilter;
  }
  //récupération des données
  $scope.basket = {};
  $scope.quantity = {};
  //fonction qui ajoute les produits dans le panier
  $scope.addProduct = function(index, param){
    $scope.basket[index] = param;
    //condition qui ajoute au panier qd pas dedans ou qui incremente la quantité
    if(index in $scope.quantity){
      $scope.quantity[index] += 1;
    }else{
      $scope.quantity[index] = 1;
    }
  };
  //fonction incrémentant la quantité dans le panier
  $scope.qPlus = function(index){
    $scope.quantity[index] += 1;
  };
  //fonction décrémentant la quantité dans le panier
  $scope.qMinus = function(index){
    $scope.quantity[index] -= 1;
  };
  $scope.addToShop = function(){
    alert('Votre paiement est accepté');
    $scope.basket = {};
    $scope.quantity = {};
  };
});
