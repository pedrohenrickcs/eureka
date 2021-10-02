'use-strict';

import { URL } from '../utils/url';

const handleLevels = require('./levels');
const renderTemplateActivities = require('../components/activitiesUser');

const handleActivities = (userId, token) => {

  $.ajax({
    url: `${URL}/users/${userId}/activities`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      handleLevels(userId, token);
      renderTemplateActivities(data);
    }
  });
};

module.exports = handleActivities;
