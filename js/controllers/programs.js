'use-strict';

import { URL } from '../utils/url';

const { renderTemplatePrograms, renderTemplateTypeLevels } = require('../components/programs');

const handlePrograms = (id, token, name, description, order) => {

  $.ajax({
    url: `${URL}/programs/${id}`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      renderTemplatePrograms(data);
      handleTypeLevels(token, data, name, order);
    }
  });
};

const handleTypeLevels = (token, data, name, order) => {
  const { id } = data;

  $.ajax({
    url: `${URL}/programs/${id}/levels`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      renderTemplateTypeLevels(data, name, order);
    }
  });
}

module.exports = handlePrograms;
