(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', ['$http', function($http) {
    this.products = {};
    var store = this;

    $http.get('../json/products.json').success(function(data) {
      store.products = data;
    })
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

  app.controller('FormController', function() {
    this.formInfo = {};

    this.addReview = function(product) {
      product.reviews.push(this.formInfo);
      this.formInfo = {};
    }
  });

  app.directive('reviewFormSubmit', function() {
    return {
      restrict: 'E',
      templateUrl: './review-form-submit.html'
    }
  });
})();
