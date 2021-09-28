'use-strict';

const URL = 'https://challenge-fielo.herokuapp.com';

(function () {

  const auth = require('./auth');

  $(window).on('load', function () {
    auth();
  })

})();

module.exports = URL;
