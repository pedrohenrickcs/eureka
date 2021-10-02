'use-strict';

import { URL } from '../utils/url';

const { renderTemplateUsers, clickUser } = require('../components/users');

const handleUsers = (data) => {

  const {
    auth,
    token
  } = data;

  if (auth) {
    $.ajax({
      url: `${URL}/users`,
      type: 'GET',
      'headers': {
        'x-access-token': token
      },
      success: function (data) {
        const $loadPage = $('.load');

        $loadPage.remove();

        renderTemplateUsers(data);
        clickUser(token);
      }
    });
  }
};


module.exports = handleUsers;
