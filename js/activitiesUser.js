'use-strict';

import { URL } from './url';

const handleActivities = (userId, token) => {

  $.ajax({
    url: `${URL}/users/${userId}/activities`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      renderTemplateActivities(data);
    }
  });
};

const renderTemplateActivities = (data) => {
  data.map((item) => {
    console.log('ActivityFeed', item);
  })
}

module.exports = handleActivities;
