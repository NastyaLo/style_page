var elem  = document.getElementById('menu_open');
var titleElem = elem.querySelector('.menu__burger');
var list      = elem.querySelector('menu__list');
var menu      = document.querySelector('.menu');
var phones    = menu.querySelector('.contacts');
var work      = menu.querySelector('.work-time');
var address   = menu.querySelector('.location');

titleElem.onclick = function() {
  elem.classList.toggle('open');
  menu.classList.toggle('closen_menu');
  phones.classList.toggle('contacts_bigger');
  work.classList.toggle('work-time_bigger');
  address.classList.toggle('location_bigger');
};
