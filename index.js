// Get references to DOM elements
const topMenuEl = document.querySelector('#top-menu');
const subMenuEl = document.querySelector('#sub-menu');
const mainEl = document.querySelector('main');

// Updated menuLinks array with submenu items as specified
const menuLinks = [
  { text: 'ABOUT', href: '#about', subLinks: [] },
  { text: 'CATALOG', href: '#catalog', subLinks: [
      { text: 'New', href: '#new' },
      { text: 'Pending', href: '#pending' },
      { text: 'History', href: '#history' }
    ] 
  },
  { text: 'ORDERS', href: '#orders', subLinks: [] }
];

// Function to build submenu dynamically
function buildSubmenu(subLinks) {
  // Clear the current contents of the submenu
  subMenuEl.innerHTML = '';
  
  // Loop over the subLinks array and create <a> elements
  subLinks.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', link.href);
    linkElement.textContent = link.text;
    subMenuEl.appendChild(linkElement);
  });
}

// Populate the top menu with items
menuLinks.forEach(link => {
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', link.href);
  linkElement.textContent = link.text;
  topMenuEl.appendChild(linkElement);
});

// Add event listener for clicks on the top-level menu
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName !== 'A') return;

  const clickedLinkText = event.target.textContent;
  const clickedLink = menuLinks.find(link => link.text === clickedLinkText);

  // Toggle submenu visibility based on clicked link's subLinks
  if (clickedLink && clickedLink.subLinks.length > 0) {
    subMenuEl.style.display = 'flex';
    buildSubmenu(clickedLink.subLinks);
  } else {
    subMenuEl.style.display = 'none';
  }
});

// Add event listener for clicks on the submenu
subMenuEl.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName !== 'A') return;

  const clickedSubLinkText = event.target.textContent;
  mainEl.innerHTML = `<h1>${clickedSubLinkText}</h1>`;

  // Hide the submenu after a selection
  subMenuEl.style.display = 'none';
});
