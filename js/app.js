(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
        name: 'Ruby',
        price: 375.55,
        description: 'This is a fantastic ruby cut by John Smith. It is a brilliant red that will be sure to catch anyone\'s eye. Buy this if you\'re looking for attention!',
        creator: 'John Smith',
        canPurchase: true,
        soldOut: false,
        image: './assets/ruby.jpg'
    },
    {
        name: 'Sapphire',
        price: 55.95,
        description: 'This sapphire is as blue as the as the bluest thing you can imagine. A flawless cut by Harvey Rockman, this sapphire makes a perfect gift for any occasion.',
        creator: 'Harvey Rockman',
        canPurchase: true,
        soldOut: false,
        image: './assets/sapphire.jpg'
    },
    {
        name: 'Emerald',
        price: 127,
        description: 'Mined from one of the world\'s largest emerald mines and cut by the world famous Pete Green, this emerald will look good in a necklace as well on coffee table jewelry.',
        creator: 'Pete Green',
        canPurchase: true,
        soldOut: false,
        image: './assets/emerald.jpg'
    }
  ];
})();
