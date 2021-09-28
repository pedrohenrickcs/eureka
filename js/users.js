import { URL } from './url';

const handleUsers = (data) => {

    const {
      auth,
      token
    } = data;

    console.log('auth', auth);

    if (auth) {
      $.ajax({
        url: `${URL}/users`,
        type: 'GET',
        'headers': {
          'x-access-token': token
        },
        success: function (data) {
          console.log('allusers', data);
          // handleProfileUser(data)
        }
      });
    }
  }

  module.exports = handleUsers;
