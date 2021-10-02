'use-strict';

import { URL } from '../utils/url';

const handlePrograms = (id, token, name, description) => {

  $.ajax({
    url: `${URL}/programs/${id}`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('PROGRAMS', data);

      const profileSubtitle = `<span class="profile__name-subtitle">${data.name}</span>`;

      $('.js-profile-name').append(profileSubtitle);

      handleTypeLevels(data.id, token, name, description);
    }
  });
};

const handleTypeLevels = (id, token, name, description) => {
  $.ajax({
    url: `${URL}/programs/${id}/levels`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('PROGRAMS LEVELSSSS', data);

      const progresLevelItem = data.map((item) => {
        console.log('item', item);
        const { order } = item;

        return `<span class="profile__timeline-progress" data-level="${order}"></span>`;
      });

      const progressLevel = `
        <div class="profile__level">
          <span>${name}</span>
          <div class="profile__timeline">
            ${progresLevelItem.join('')}
            <span class="profile__timeline-progress" data-level="4"></span>
          </div>
        </div>`;

      $('#profile').append(progressLevel);
    }
  });
}

module.exports = handlePrograms;
