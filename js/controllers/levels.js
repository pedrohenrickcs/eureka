'use-strict';

import { URL } from '../utils/url';

const handlePrograms = require('../controllers/programs');

const handleLevels = (userId, token) => {
  $.ajax({
    url: `${URL}/levels/${userId}`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('LEVELS', data);

      const { programId, name, description, order } = data;

      handlePrograms(programId, token, name, description, order)
    }
  });
};

module.exports = handleLevels;
