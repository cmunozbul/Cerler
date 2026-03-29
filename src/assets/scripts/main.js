/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

var map = L.map('map').setView([42.625, 0.513], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const boton = document.querySelector('.menu__icono');
const menu = document.querySelector('.menu__list');

document.addEventListener('DOMContentLoaded', () => {
  const boton = document.querySelector('.menu__icono');
  const menu = document.querySelector('.menu__list');

  if (boton && menu) {
    boton.addEventListener('click', () => {
      menu.classList.toggle('activo');
    });
  }
});