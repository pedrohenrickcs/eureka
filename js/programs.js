'use-strict';

import { URL } from './url';

const handlePrograms = (userId, token) => {
  console.log('user', userId);

  $.ajax({
    url: `${URL}/programs/${userId}/levels`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('PROGRAMS', data);
    }
  });
};

module.exports = handlePrograms;
