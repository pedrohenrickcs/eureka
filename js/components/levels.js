'use-strict';

import { URL } from '../utils/url';

const handlePrograms = require('./programs');

const handleLevels = (userId, token) => {
  console.log('user', userId);

  $.ajax({
    url: `${URL}/levels/${userId}`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('LEVELS', data);

      const { name, description } = data;

      handlePrograms(data.programId, token, name, description)
    }
  });
};

module.exports = handleLevels;
