// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

//Putting this here for good practice until I am fully familar and confident
console.log('Checking My Console for Errors')

//Select and chache'ing (spell checking 🤦🏾‍♀️) the <main>Element</main>
const mainEl = document.querySelector('main');

//Adding background color (Use Var to access directly)
mainEl.style.backgroundColor = 'var(--main-bg)';

//Changing the content of mainEl to display <h1>DOM Manipulation</h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

//Adding the flex-ctr class to mainEl
mainEl.classList.add('flex-ctr');

//Select and caching(spell checked... there's no "e" in chaching.. Who KNEW?🙃) the <nav id="top-menu">
const topMenuEl = document.getElementById('top-menu');


//Changing height of top menu to be 100%
topMenuEl.style.height = '100%';

//Setting the backgound color
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Adding a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//This line is telling JavaScript to go through each link in menuLinks.
menuLinks.forEach(link => {
  const aElement = document.createElement('a');
  aElement.href = link.href;
  aElement.textContent = link.text;
  topMenuEl.appendChild(aElement);
  
});

