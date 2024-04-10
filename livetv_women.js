// ==UserScript==
// @name        LiveTV Women only
// @namespace   Violentmonkey Scripts
// @match       *://livetv*.*/*
// @grant       none
// @version     1.0
// @run-at      document-end
// @author      raulblanko
// @updateURL   https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/livetv_women.js
// @downloadURL https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/livetv_women.js
// @description 10.04.2024, 14:02:00
// ==/UserScript==
//
// match blank: *://*/*

console.log('LiveTV monkey script', document.querySelector('meta').baseURI);

if (document.querySelector('meta').baseURI.includes('allupcomingsports')) {
  var button_hide = document.createElement('button');
  button_hide.textContent = 'No ATP'; //

  button_hide.style.position = 'fixed';
  button_hide.style.top = '30px';
  button_hide.style.right = '30px';
  document.body.appendChild(button_hide);

  button_hide.onclick = function() {
    //favorites = ['Sakkari', 'Trevisan', 'Topalova'];
    favorites = ['Alves', 'Aney', 'Appleton', 'Arango', 'Badosa', 'Baindl', 'Bara', 'Birrell', 'Bogdan', 'Bouchard', 'Boulter', 'Bouzas', 'Burrage',
     'Chirico', 'Cirstea', 'Cocciaretto', 'Collins', 'Dodin', 'Falkowska', 'Fett', 'Frech', 'Fruhvirtova', 'Garcia', 'Giorgi', 'Guarachi',
     'Hesse', 'Hourigan', 'Hruncakova', 'Hui', 'Jeanjean', 'Juvan', 'Kalinina', 'Kawa', 'Kerber', 'Kichenok', 'Kostyuk', 'Kotliar', 'Kubka',
     'Martic', 'Martincova', 'Montgomery', 'Moratelli', 'Navarro', 'Naya', 'Ngounoue', 'Niemeier', 'Oliynykova', 'Osorio', 'Pegula', 'Pigossi',
     'Sakkari', 'Snigur', 'Sonmez', 'Starodubtseva', 'Stefani', 'Stefanini', 'Stevanovic', 'Stollar', 'Strakhova', 'Svitolina', 'Swiatek', 'Szostak',
     'Todoni', 'Tomova', 'Trevisan', 'Tsurenko', 'Udvardy', 'Vickery', 'Volodko', 'Volynets', 'Yastremska', 'Zavatska', 'Zimmermann'];

    substrings = ["(ATP ", "(ATP."];
    td_cells = document.querySelectorAll('tr > td[colspan="2"]');

    removeCells = Array.from(td_cells).filter(cell =>
      substrings.some(substring => cell.innerText.includes(substring))
    );
    removeCells.forEach(cell => {
      cell.style.display = 'none'; // Hides the cell
    });
    console.log('removeCells', removeCells);

    favoriteCells = Array.from(td_cells).filter(cell =>
      favorites.some(substring => cell.innerText.includes(substring))
    );
    console.log('favoriteCells', favoriteCells);
    favoriteCells.forEach(cell => {
      cell.style.border = '1px dotted blue'; // Highlight cell
    });
  };
};