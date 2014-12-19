(function() {
  var app = angular.module('store', ['ngStorage']);

  app.controller('StoreController', ['$http', '$scope', '$localStorage', '$sessionStorage', function($http, $scope, $localStorage, $sessionStorage) {
    this.products = {};
    $scope.$storage = $localStorage;
    $scope.$storage.cart = $scope.$storage.cart || {};

    var store = this;

    $http.get('../json/products.json').success(function(data) {
      store.products = data;
    })

    this.addToCart = function(item) {
      $scope.$storage.cart[item] = store.products[item];
    }

    this.removeFromCart = function(item) {
      delete $scope.$storage.cart[item];
    }

    this.inCart = function(item) {
      return(item in $scope.$storage.cart);
    }
  }]);

  app.controller('PanelController', function() {
    this.tab = 1;
    this.review = 0;

    this.selectTab = function(clicked) {
      this.tab = clicked;
    };

    this.isSelected = function(tab) {
      return this.tab === tab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = 0;

    this.selectReview = function(clicked) {
      this.review = clicked;
    };

    this.whichReview = function(review) {
      return this.review === review;
    };
  });

  app.directive('reviewFormSubmit', function() {
    return {
      restrict: 'E',
      templateUrl: './review-form-submit.html'
    }
  });

  app.directive('reviewForm', function() {
    return {
      restrict: 'E',
      templateUrl: './review-form.html',
      controller: function() {
        this.formInfo = {};

        this.addReview = function(product) {
          product.reviews.push(this.formInfo);
          this.formInfo = {};
        }
      },
      controllerAs: 'form'
    }
  });

  app.directive('addToCart', function() {
    return {
      restrict: 'E',
      templateUrl: './add-to-cart.html'
    }
  });
})();
