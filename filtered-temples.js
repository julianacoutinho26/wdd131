// temples.js




const nav = document.querySelector('nav ul');
const hamburger = document.createElement('button');
hamburger.classList.add('hamburger');
hamburger.textContent = '☰'; 


document.querySelector('header').prepend(hamburger);


hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');

  if (hamburger.textContent === '☰') {
    hamburger.textContent = '✖';
  } else {
    hamburger.textContent = '☰';
  }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
   {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: " 19–21 March 1999",
    area:  45800 ,
    imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-954942-wallpaper.jpg"
   },
  {
    templeName: "Belém Brazil",
    location: "Belém Brazil",
    dedicated: " 20 November 2022",
    area:  28675,
    imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
   },
    {
    templeName: "Curitiba Brazil",
    location: "Curitiba, Brazil",
    dedicated: "17 September 2023 ",
    area:   25000,
    imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/400x250/curitiba-brazil-temple-lds-852263-wallpaper.jpg"
   },
  ]
  // Seleciona o container onde os cards serão inseridos
const container = document.querySelector('#temple-cards');

// Loop pelo array de templos
temples.forEach(temple => {
  // Cria o card
  const card = document.createElement('section');
  card.classList.add('temple-card');

  // Nome do templo
  const name = document.createElement('h2');
  name.textContent = temple.templeName;

  // Localização
  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;

  // Data de dedicação
  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

  // Área total
  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area} sq ft`;

  // Imagem com lazy loading
  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = 'lazy';

  // Adiciona tudo ao card
  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(image);

  // Insere o card no container
  container.appendChild(card);
});

// Function to render temple cards
function displayTemples(filteredTemples) {
  const container = document.querySelector('#temple-cards');
  container.innerHTML = ''; // clear previous cards

  filteredTemples.forEach(temple => {
    const card = document.createElement('section');
    card.classList.add('temple-card');

    const name = document.createElement('h2');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = 'lazy';

    card.append(name, location, dedicated, area, image);
    container.appendChild(card);
  });
}

// Initial display (Home)
displayTemples(temples);

// --- Navigation filtering ---
document.querySelectorAll('nav ul li').forEach(item => {
  item.addEventListener('click', () => {
    const filter = item.textContent.toLowerCase();
    let filtered = [];

    switch (filter) {
      case 'home':
        filtered = temples;
        break;
      case 'old':
        filtered = temples.filter(t => {
          const year = parseInt(t.dedicated.split(',')[0]);
          return year < 1900;
        });
        break;
      case 'new':
        filtered = temples.filter(t => {
          const year = parseInt(t.dedicated.split(',')[0]);
          return year > 2000;
        });
        break;
      case 'large':
        filtered = temples.filter(t => t.area > 90000);
        break;
      case 'small':
        filtered = temples.filter(t => t.area < 10000);
        break;
    }

    displayTemples(filtered);
  });
});

// --- Footer dynamic year and last modified ---
// --- Footer dynamic year and last modified ---
const footer = document.querySelector('footer');

// Ano atual
const year = new Date().getFullYear();

// Converte a string de última modificação em objeto Date
const lastModifiedDate = new Date(document.lastModified);

// Formata para mostrar data e hora
const options = {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};
const formattedDate = lastModifiedDate.toLocaleString('pt-BR', options);

// Insere no footer
footer.innerHTML = `&copy; ${year} Juliana | Last Updated: ${formattedDate}`;




