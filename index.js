var menuElem  = document.getElementById('menu_open');
var titleElem = menuElem.querySelector('.menu__burger');
var list      = menuElem.querySelector('menu__list');
var menu      = document.querySelector('.menu');
var phones    = menu.querySelector('.contacts');
var work      = menu.querySelector('.work-time');
var address   = menu.querySelector('.address');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
  menu.classList.remove('open_menu');
  phones.classList.remove('contacts_bigger');
  work.classList.remove('work-time_bigger');
  address.classList.remove('location_bigger');
};

titleElem.onmouseout = function() {
  menuElem.classList.remove('open');
  menu.classList.toggle('open_menu');
  phones.classList.toggle('contacts_bigger');
  work.classList.toggle('work-time_bigger');
  address.classList.toggle('location_bigger');
};
