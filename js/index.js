'use-strict';

(function () {

  const auth = require('./auth');

  $(window).on('load', function () {
    auth();
  })

})();
