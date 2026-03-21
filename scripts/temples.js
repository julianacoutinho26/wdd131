// temples.js

// --- Footer dynamic year and last modified ---
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();

const footer = document.querySelector('footer');
footer.innerHTML = `&copy; ${yearSpan.textContent} Juliana | Last Updated: ${document.lastModified}`;


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
