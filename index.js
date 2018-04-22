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

var menuElem  = document.getElementById('menu_open_mobile');
var titleElem = menuElem.querySelector('.menu__burger_mobile');
var line1     = document.getElementById('menu__burger__line-1');
var line2     = document.getElementById('menu__burger__line-2');
var line3     = document.getElementById('menu__burger__line-3');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
  line1.classList.toggle('cross');
  line2.classList.toggle('cross');
  line3.classList.toggle('cross');
};

titleElem.onmouseout = function() {
  menuElem.classList.remove('open');
  line1.classList.remove('cross');
  line2.classList.remove('cross');
  line3.classList.remove('cross');
};
