const jungleManiacsGuys = [
  {
    image: 'JM-Images/ManiacsPhoto/ManiacPhoto1.jpeg',
    name: 'Saila Man',
    whereFrom: 'Pokhareli Kancha',
    description: 'Genuinely passionate about the natural world and finds joy in immersing themselves in its beauty and wonders.',
  },
  {
    image: 'JM-Images/ManiacsPhoto/ManiacPhoto2.jpeg',
    name: 'BJ Jung Kaji',
    whereFrom: 'Pokhareli Kancha',
    description: 'Prioritizes sustainable living, seek to reduce their impact on the environment, and actively promote environmental awareness.',
  },
  {
    image: 'JM-Images/ManiacsPhoto/ManiacPhoto3.jpeg',
    name: 'Kafle Sauji',
    whereFrom: 'Pokhareli Kancha',
    description: 'Observe and study different aspects of nature, from species identification to ecological interactions, and often share their insights with others.',
  },
  {
    image: 'JM-Images/ManiacsPhoto/ManiacPhoto4.jpeg',
    name: 'Pudke Don',
    whereFrom: 'Pokhareli Kancha',
    description: 'Prioritizes organic and locally sourced products, support renewable energy initiatives, or advocate for environmentally responsible policies.',
  },
  {
    image: 'JM-Images/ManiacsPhoto/ManiacPhoto5.jpeg',
    name: 'Puskar Man',
    whereFrom: 'Pokhareli Kancha',
    description: 'Holds a profound affection for nature, taking pleasure in exploring and experiencing its diverse landscapes, flora, and fauna.',
  },
  {
    image: 'JM-Images/ManiacsPhoto/ManiacPhoto6.jpeg',
    name: 'Lakuu',
    whereFrom: 'Pokhareli Kancha',
    description: 'Protect and preserve natures delicate balance, making conscious choices to minimize their ecological footprint.',
  },
];

const seeMore = document.getElementById('see-more-infos');

const mainDiv = document.getElementById('dynamicInfos');

for (let i = 0; i < jungleManiacsGuys.length; i += 1) {
  const div = document.createElement('div');
  div.className = 'dynamic-Infos';
  div.id = `maniacInfo${i}`;
  mainDiv.appendChild(div);

  const pic = document.createElement('img');
  pic.className = 'dynamic-maniacs-pic';
  pic.src = jungleManiacsGuys[i].image;
  div.appendChild(pic);

  const divTwo = document.createElement('div');
  divTwo.className = 'dynamic-about';
  div.appendChild(divTwo);

  const h3 = document.createElement('h3');
  h3.className = 'dynamic-about-h3';
  h3.innerHTML = jungleManiacsGuys[i].name;
  divTwo.appendChild(h3);

  const h4 = document.createElement('h4');
  h4.className = 'dynamic-about-h4';
  h4.innerHTML = jungleManiacsGuys[i].whereFrom;
  divTwo.appendChild(h4);

  const p = document.createElement('p');
  p.className = 'dynamic-about-p';
  p.innerHTML = jungleManiacsGuys[i].description;
  divTwo.appendChild(p);
}

function showFunction() {
  document.getElementById('band2').style.display = 'flex';
  document.getElementById('band3').style.display = 'flex';
  document.getElementById('band4').style.display = 'flex';
  document.getElementById('band5').style.display = 'flex';
  seeMore.className = 'ignore';
}

seeMore.addEventListener('touchstart', showFunction);

const ignoreDiv = document.getElementById('ignore');
ignoreDiv.style.display = 'none';

seeMore.addEventListener('click', showFunction);