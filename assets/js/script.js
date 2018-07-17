var guitarApp = angular.module('guitarApp', []);
 guitarApp.controller('guitarCtrl', function($scope, $http){
   $http.get('assets/js/guitare.json').then(function(response){
     $scope.guitars = response.data;
 });
  $scope.changeFilter = function(newFilter){
      $scope.itemsCategories = newFilter;
  }
  //déclaration des variables pour la récupération des données
  $scope.basket = {};
  $scope.quantity = {};
  $scope.price = {};
  $scope.total = 0;
  //fonction qui calcul le total
  $scope.ttl = function(){
    $scope.total = 0;
    for(var key in $scope.quantity){
      $scope.total += $scope.quantity[key] * $scope.basket[key].price;
    }
  };
  //fonction qui ajoute les produits dans le panier
  //param=paramètre de la fonction qu'on retrouve dans le html
  $scope.addProduct = function(index, param){
    $scope.basket[index] = param;
    //condition qui ajoute au panier qd pas dedans ou qui incremente la quantité
    if(index in $scope.quantity){
      $scope.quantity[index] += 1;
    }else{
      $scope.quantity[index] = 1;
    }
    //calcul le total
    $scope.ttl();
  };
  //fonction qui supprime un produit
  $scope.removeItem = function(index){
    delete $scope.basket[index];
    //calcul le total
    $scope.ttl();
  };
  //fonction incrémentant la quantité dans le panier
  $scope.qPlus = function(index){
    $scope.quantity[index] += 1;
    //calcul le total
    $scope.ttl();
  };
  //fonction décrémentant la quantité dans le panier
  $scope.qMinus = function(index){
    $scope.quantity[index] -= 1;
    //calcul le total
    $scope.ttl();
  };

  $scope.addToShop = function(){
    alert('Votre paiement est accepté');
    $scope.basket = {};
    $scope.quantity = {};
  };
});
