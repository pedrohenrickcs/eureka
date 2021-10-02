'use-strict';

import { URL } from '../utils/url';

const handlePrograms = require('./programs');

const handleLevels = (userId, token) => {
  $.ajax({
    url: `${URL}/levels/${userId}`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('LEVELS', data);

      const { programId, name, description } = data;

      handlePrograms(programId, token, name, description)
    }
  });
};

module.exports = handleLevels;
