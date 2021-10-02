'use-strict';

const renderTemplateActivities = (data) => {
  data.map((item) => {
    const { date, description, id } = item;

    const activityUser = `
      <div class="activities__timeline" data-id="${id}">
        <span class="activities__date">${date}</span>
        <h4 class="activities__description">${description}</h4>
      </div>
    `
    $('#activities').append(activityUser);
  })
}

module.exports = renderTemplateActivities;
