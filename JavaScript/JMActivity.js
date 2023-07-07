const jmActivities = [
  {
    activityTitle: 'Hiking in Raniban',
    activitySubDescription: 'Sunday, Sep 2, 2017',
    activityImage: 'JM-Images/JMActivityImages/HikingBlogCardImage.jpeg',
    imageAltText: 'Hiking',
    activityTags: '#ranibanhike #junglemaniacs',
    activityDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    activityTitle: 'Hiking in Methlang',
    activitySubDescription: 'Sunday, Sep 2, 2017',
    activityImage: 'JM-Images/JMActivityImages/HikingBlogCardImage.jpeg',
    imageAltText: 'Hiking',
    activityTags: '#methlanghike #junglemaniacs',
    activityDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    activityTitle: 'Cycling in Gharmi',
    activitySubDescription: 'Sunday, Sep 2, 2017',
    activityImage: 'JM-Images/JMActivityImages/CyclingCardImage.jpeg',
    imageAltText: 'Cycling',
    activityTags: '#cyclingingharmi #junglemaniacs',
    activityDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    activityTitle: 'Motorcycle Ride in Thulakot',
    activitySubDescription: 'Sunday, Sep 2, 2017',
    activityImage: 'JM-Images/JMActivityImages/MotorcycleRideImage.jpeg',
    imageAltText: 'Motorcycle Ride',
    activityTags: '#motorcycleride #junglemaniacs',
    activityDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    activityTitle: 'Camping in Matthikhan',
    activitySubDescription: 'Sunday, Sep 2, 2017',
    activityImage: 'JM-Images/JMActivityImages/CampingCardImage.jpeg',
    imageAltText: 'Camping',
    activityTags: '#camping #matthikhan #junglemaniacs',
    activityDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
];

window.addEventListener('load', () => {
  document
    .querySelector('.see-more-btn')
    .addEventListener('click', () => {
      document.querySelector(
        '.jmactivity-cards-container',
      ).style.maxHeight = '100%';
      document.querySelector(
        '.see-more-btn',
      ).style.display = 'none';
    });

  const jmactivity = document.querySelector('.jmactivity-cards-container');

  for (let i = 0; i < jmActivities.length; i += 1) {
    const card = `
        <div class="jmactivity-card">
            <h2 class="activityTitle">${jmActivities[i].activityTitle}</h2>
            <h5 class="activitySubDescription">${jmActivities[i].activitySubDescription}</h5>
            <div class="activityImageContainer" style="height:200px;">
                <img class="jmactivity-cardimg" src="${jmActivities[i].activityImage}" alt="${jmActivities[i].imageAltText}">
            </div>
            <p class="activityTags">${jmActivities[i].activityTags}</p>
            <p class="activityDescriptionText">${jmActivities[i].activityDescriptionText}</p>
        </div>
            `;
    jmactivity.innerHTML += card;
  }
});
