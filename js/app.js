(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
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

  var gems = [
    {
        name: 'Ruby',
        price: 375.55,
        description: 'This is a fantastic ruby cut by John Smith. It is a brilliant red that will be sure to catch anyone\'s eye. Buy this if you\'re looking for attention!',
        creator: 'John Smith',
        canPurchase: true,
        soldOut: false,
        image: './assets/ruby.jpg',
        reviews: [
          {
            stars: 3,
            reviewer: "Bob Jones",
            comments: "Wow, John Smith! This really rocks! Keep up the good work."
          }]
    },
    {
        name: 'Sapphire',
        price: 55.95,
        description: 'This sapphire is as blue as the as the bluest thing you can imagine. A flawless cut by Harvey Rockman, this sapphire makes a perfect gift for any occasion.',
        creator: 'Harvey Rockman',
        canPurchase: true,
        soldOut: false,
        image: './assets/sapphire.jpg',
        reviews: [
          {
            stars: 5,
            reviewer: "Joe Schmoe",
            comments: "I am totally impressed with what this sapphire can do. I gave it to my girlfriend, whom I hate, and she broke up with me on the spot! Thanks Harvey!"
          },
          {
            stars: 4,
            reviewer: "Alex Asphault",
            comments: "Yeah, not bad."
          }
        ]
    },
    {
        name: 'Emerald',
        price: 127,
        description: 'Mined from one of the world\'s largest emerald mines and cut by the world famous Pete Green, this emerald will look good in a necklace as well on coffee table jewelry.',
        creator: 'Pete Green',
        canPurchase: true,
        soldOut: false,
        image: './assets/emerald.jpg',
        reviews: []
    }
  ];
})();
