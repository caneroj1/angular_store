var checkExist = setInterval(function() {
  if ($('.submit-review-form').length) {
    $('.submit-review-form').on('submit', function() {
      $('.modal').modal('hide');
      return true;
    });
    clearInterval(checkExist);
  }
}, 100); // check every 100ms
