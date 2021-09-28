'use-strict';

import { URL } from './url';

const handleProfileUser = (id, token) => {
  console.log('res data', id);
  $.ajax({
    url: `${URL}/users/${id}`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('PROFILE', data);
      const name = `<span class="profile__name">${data.name}</span>`;

      $('#profile').html(name);

    }
  });
}

module.exports = handleProfileUser;
