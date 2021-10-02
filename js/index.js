'use-strict';

const loadPage = require('./modules/load');

(function () {

  const auth = require('./controllers/auth');

  loadPage();

  $(window).on('load', function () {
    auth();
  })

})();
