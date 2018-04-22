var menuElemMobile  = document.getElementById('menu_open_mobile');
var titleElemMobile = menuElemMobile.querySelector('.menu__burger_mobile');
var line1     = document.getElementById('menu__burger__line-1');
var line2     = document.getElementById('menu__burger__line-2');
var line3     = document.getElementById('menu__burger__line-3');

titleElemMobile.onclick = function() {
  menuElemMobile.classList.toggle('open');
  line1.classList.toggle('cross');
  line2.classList.toggle('cross');
  line3.classList.toggle('cross');
};

titleElemMobile.onmouseout = function() {
  menuElemMobile.classList.remove('open');
  line1.classList.remove('cross');
  line2.classList.remove('cross');
  line3.classList.remove('cross');
};
