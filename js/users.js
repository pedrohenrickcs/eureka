import { URL } from './url';

const handleProfileUser = require('./profile');

const handleUsers = (data) => {

    const {
      auth,
      token
    } = data;

    const idToken = localStorage.getItem('id');

    localStorage.setItem('id', token)

    const $allUsers = $('#name');

    if (auth) {
      $.ajax({
        url: `${URL}/users`,
        type: 'GET',
        'headers': {
          'x-access-token': idToken
        },
        success: function (data) {
          data.map((item) => {
            // console.log('ITEMS', item);
            $allUsers.append(`<span class="users__name js-name" data-id=${item.id}>${item.name}</span>`)
          })

          $('#name .js-name').on('click', function () {
            const idUser = $(this).data('id');
            handleProfileUser(idUser, idToken);
          })
        }
      });
    }
  }

  module.exports = handleUsers;
