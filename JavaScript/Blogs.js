const jungleManiacsBlogs = [
  {
    blogTitle: 'Hiking in Raniban',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: '',
    imageAltText: 'Hiking',
    blogTags: '#ranibanhike #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    blogTitle: 'Hiking in Methlang',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: '',
    imageAltText: 'Hiking',
    blogTags: '#methlanghike #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    blogTitle: 'Cycling in Gharmi',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: '',
    imageAltText: 'Cycling',
    blogTags: '#cyclingingharmi #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    blogTitle: 'Motorcycle Ride in Thulakot',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: '',
    imageAltText: 'Motorcycle Ride',
    blogTags: '#motorcycleride #junglemaniacs',
    blogDescriptionText: 'Raniban is beautiful jungle and hill in southern side of Fewa Lake',
  },
  {
    blogTitle: 'Camping in Matthikhan',
    blogSubDescription: 'Sunday, Sep 2, 2017',
    blogImage: '',
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
        <div class="card">
            <h2>${jungleManiacsBlogs[i].blogTitle}</h2>
            <h5>${jungleManiacsBlogs[i].blogSubDescription}</h5>
            <div class="fakeimg" style="height:200px;">
                <img src="${jungleManiacsBlogs[i].blogImage}" alt="${jungleManiacsBlogs[i].imageAltText}">
            </div>
            <p>${jungleManiacsBlogs[i].blogTags}</p>
            <p>${jungleManiacsBlogs[i].blogDescriptionText}</p>
        </div>
            `;
    blog.innerHTML += card;
  }
});
