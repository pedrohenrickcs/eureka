'use-strict';

import { URL } from '../utils/url';

const handleLevels = require('./levels');

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

const renderTemplateActivities = (data) => {
  data.map((item) => {
    const { date, description, id } = item;

    const activityUser = `
      <div class="activities__timeline" data-id="${id}">
        <span class="activities__date">${date}</span>
        <h4 class="activities__description">${description}</h4>
      </div>
    `
    $('#activities').append(activityUser);
  })
}

module.exports = handleActivities;
