const URL = 'https://challenge-fielo.herokuapp.com';

(function () {
  'use-strict';

  const auth = require('./auth');

  const handleProfileUser = () => {

  }

  $(window).on('load', function () {
    auth();
  })

})();
module.exports = URL;
