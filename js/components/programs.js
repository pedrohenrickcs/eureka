'use-strict';

const renderTemplatePrograms = (data) => {
  const profileSubtitle = `<span class="profile__name-subtitle">${data.name}</span>`;

  $('.js-profile-name').append(profileSubtitle);
};

const renderTemplateTypeLevels = (data, name) => {

  const progresLevelItem = data.map((item) => {
    const {
      order
    } = item;

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
};

module.exports = {
  renderTemplatePrograms,
  renderTemplateTypeLevels
};
