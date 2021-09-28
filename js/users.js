'use-strict';

import { URL } from './url';

const handleProfileUser = require('./profile');

const handleUsers = (data) => {

    const {
      auth,
      token
    } = data;

    const idToken = localStorage.getItem('id');
    const $allUsers = $('#name');

    localStorage.setItem('id', token)

    if (auth) {
      $.ajax({
        url: `${URL}/users`,
        type: 'GET',
        'headers': {
          'x-access-token': idToken
        },
        success: function (data) {
          data.map((item, index) => {

            const { image, name, id } = item;

            const renderUsers = `
              <div class="users__info">
                <span>${index + 1}</span>
                <img class="users__image" src="${image}" alt="${name}" />
                <span class="users__name js-name" data-id=${id}>${name}</span>
              </div>
            `

            $allUsers.append(renderUsers);
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
