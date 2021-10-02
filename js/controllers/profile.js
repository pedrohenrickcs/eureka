'use-strict';

import { URL } from '../utils/url';

const renderTemplateProfile = require('../components/profile');
const handleLevels = require('./levels');

const handleProfileUser = (id, token) => {
  $.ajax({
    url: `${URL}/users/${id}`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      const $loadPage = $('.load');
      const { levelId } = data;

      $loadPage.remove();

      renderTemplateProfile(data)
      handleLevels(levelId, token);
    }
  });
}

module.exports = handleProfileUser;
