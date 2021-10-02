'use-strict';

import { URL } from '../utils/url';

const handleUsers = require('../components/users');

const auth = () => {
  $.ajax({
    url: `${URL}/auth`,
    type: 'POST',
    'headers': {
      'x-app-id': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb'
    },
    success: function (data) {
      handleUsers(data);
    }
  });
}

module.exports = auth;
