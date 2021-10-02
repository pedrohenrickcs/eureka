'use-strict';

const renderTemplatePrograms = (data) => {
  const profileSubtitle = `<span class="profile__name-subtitle">${data.name}</span>`;

  $('.js-profile-name').append(profileSubtitle);
};

const renderTemplateTypeLevels = (data, name, orderActive) => {

  const progresLevelItem = data.map((item) => {
    const {
      order
    } = item;

    const validLevel = orderActive === item.order && 'active';
    const $levelSubtitle = $('.js-levelSubtitle');

    orderActive === 1 ? $levelSubtitle.show() : $levelSubtitle.hide();

    return `<span class="profile__timeline-progress ${validLevel}" data-level="${order}"></span>`;
  });

  const renderLevelTemplate = `<span class="profile__levelSubtitle js-levelSubtitle">
              Next Tier
              <span>Platinum</span>
            </span>`;

  const validLevel = orderActive === 1 ? renderLevelTemplate : '';

  console.log('orderActive', orderActive);

  const progressLevel = `
        <div class="profile__level">
          <div class="profile__levelTitle">
            <span>${name}</span>
            ${validLevel}
          </div>
          <div class="profile__timeline">
            <span class="profile__timeline-progress" data-level="4"></span>
            ${progresLevelItem.join('')}
          </div>
        </div>`;

  $('#profile').append(progressLevel);

};

module.exports = {
  renderTemplatePrograms,
  renderTemplateTypeLevels
}
