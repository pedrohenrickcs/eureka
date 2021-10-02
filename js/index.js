'use-strict';

const loadPage = require('./modules/load');

(function () {

  const auth = require('./modules/auth');

  loadPage();

  $(window).on('load', function () {
    auth();
  })

})();
