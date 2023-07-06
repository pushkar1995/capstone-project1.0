const jungleManiacsBlogs = [
  {
    blogTitle: 'Hiking in Raniban',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: 'JM-Images/BlogImages/HikingBlogCardImage.jpeg',
    imageAltText: 'Hiking',
    blogTags: '#ranibanhike #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    blogTitle: 'Hiking in Methlang',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: 'JM-Images/BlogImages/HikingBlogCardImage.jpeg',
    imageAltText: 'Hiking',
    blogTags: '#methlanghike #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    blogTitle: 'Cycling in Gharmi',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: 'JM-Images/BlogImages/CyclingCardImage.jpeg',
    imageAltText: 'Cycling',
    blogTags: '#cyclingingharmi #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    blogTitle: 'Motorcycle Ride in Thulakot',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: 'JM-Images/BlogImages/MotorcycleRideImage.jpeg',
    imageAltText: 'Motorcycle Ride',
    blogTags: '#motorcycleride #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    blogTitle: 'Camping in Matthikhan',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: 'JM-Images/BlogImages/CampingCardImage.jpeg',
    imageAltText: 'Camping',
    blogTags: '#camping #matthikhan #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
];

window.addEventListener('load', () => {
  document
    .querySelector('.see-more-btn')
    .addEventListener('click', () => {
      document.querySelector(
        '.cards-container',
      ).style.maxHeight = '100%';
      document.querySelector(
        '.see-more-btn',
      ).style.display = 'none';
    });

  const blog = document.querySelector('.cards-container');

  for (let i = 0; i < jungleManiacsBlogs.length; i += 1) {
    const card = `
        <div class="blog-card">
            <h2 class="blogTitle">${jungleManiacsBlogs[i].blogTitle}</h2>
            <h5 class="blogSubDescription">${jungleManiacsBlogs[i].blogSubDescription}</h5>
            <div class="blogImageContainer" style="height:200px;">
                <img class="cardImage" src="${jungleManiacsBlogs[i].blogImage}" alt="${jungleManiacsBlogs[i].imageAltText}">
            </div>
            <p class="blogTags">${jungleManiacsBlogs[i].blogTags}</p>
            <p class="blogDescription">${jungleManiacsBlogs[i].blogDescriptionText}</p>
        </div>
            `;
    blog.innerHTML += card;
  }
});
