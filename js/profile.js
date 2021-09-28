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
    }
  });
}

module.exports = handleProfileUser;
