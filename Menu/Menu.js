/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const header = document.querySelector('.header');

function createMenu (array) {
  const menu = document.createElement('div');
  const ul = document.createElement('ul');

  array.forEach(el => {
    const list = document.createElement('li');
    list.textContent= el;
    ul.appendChild(list);
  })

  header.appendChild(menu);
  menu.appendChild(ul);

  menu.classList.add('menu', 'menu--open');

  header.addEventListener('click', (event) => {
    menu.classList.toggle('menu--open');
  });

  return menu
}

header.appendChild(createMenu(menuItems));