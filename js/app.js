(function() {
  var app = angular.module('store', ['ngStorage']);

  app.controller('StoreController', ['$http', '$scope', '$localStorage', '$sessionStorage', function($http, $scope, $localStorage, $sessionStorage) {
    // initialize local storage
    $scope.$storage = $localStorage;

    // initialize our local storage for the shopping cart either to itself or to an empty object
    $scope.$storage.cart = $scope.$storage.cart || {};

    // initialize our local storage for products either to itself or to an empty array
    $scope.$storage.products = $scope.$storage.products || [];
    this.products = $scope.$storage.products;

    // if the local storage for the products is empty, then we need to fetch the data via ajax request
    // once that is done, set local storage to that data and then set our products to the local storage
    if($scope.$storage.products.length === 0) {
      var store = this;
      $http.get('../json/products.json').success(function(data) {
        $scope.$storage.products = data;
        store.products = $scope.$storage.products;
      });
    }

    this.addToCart = function(index, product) {
      $scope.$storage.cart[index] = product;
    }

    this.removeFromCart = function(item) {
      delete $scope.$storage.cart[item];
    }

    this.inCart = function(item) {
      return(item in $scope.$storage.cart);
    }

    this.showReviews = function(product) {
      product.showReviews = true;
    }

    this.hideReviews = function(product) {
      product.showReviews = false;
    }
  }]);

  app.directive('productList', function() {
    return {
      restrict: 'E',
      templateUrl: './product-list.html',
      controller: 'StoreController',
      controllerAs: 'store',
    };
  });

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

  app.directive('reviewForm', function() {
    return {
      restrict: 'E',
      templateUrl: './review-form.html',
      controller: ['$scope', '$localStorage', function($scope, $localStorage) {
        this.formInfo = {};

        this.addReview = function(product, index) {
          // add the review to the product in local storage
          $scope.$storage.products[index].reviews.push(this.formInfo);
          this.formInfo = {};
        }
      }],
      controllerAs: 'form'
    }
  });

  app.directive('addToCart', function() {
    return {
      restrict: 'E',
      templateUrl: './add-to-cart.html',
    };
  });

  app.directive('showReviewButton', function() {
    return {
      restrict: 'E',
      templateUrl: './show-review-button.html'
    };
  });

  app.directive('reviewFormSubmit', function() {
    return {
      restrict: 'E',
      templateUrl: './review-form-submit.html'
    };
  });

  app.directive('productBasicInfo', function () {
    return {
      restrict: 'E',
      templateUrl: './product-basic-info.html'
    };
  });

})();
