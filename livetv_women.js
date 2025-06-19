// ==UserScript==
// @name        LiveTV Women only
// @namespace   Violentmonkey Scripts
// @match       *://livetv*.*/*
// @grant       none
// @version     1.3
// @run-at      document-end
// @author      raulblanko
// @updateURL   https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/livetv_women.js
// @downloadURL https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/livetv_women.js
// @description 19.06.2025, 10:48:00
// ==/UserScript==
//
// match blank: *://*/*
title_name = document.querySelector('span.sltitle').innerText;
console.log('title_name:', title_name);
document.title = title_name + ' LiveTV';

console.log('LiveTV monkey script', document.querySelector('meta').baseURI);

if (document.querySelector('meta').baseURI.includes('allupcomingsports')) {
  var button_hide = document.createElement('button');
  button_hide.textContent = 'No ATP'; //

  button_hide.style.position = 'fixed';
  button_hide.style.top = '30px';
  button_hide.style.right = '30px';
  document.body.appendChild(button_hide);

  button_hide.onclick = function() {
    
    favorites = ['Aney', 'Appleton', 'Arango', 'Avanesyan', 'Badosa', 'Birrell', 'Bogdan', 'Bouchard', 'Bouzas', 'Burrage', 'Chirico', 'Cirstea', 'Collins', 'Falkowska', 'Fett', 'Frech', 'Garcia', 'Giorgi', 'Haverlag', 'Hesse', 'Hourigan', 'Iliev', 'Jacquemot', 'Janicijevic', 'Juvan', 'Kasatkina', 'Kawa', 'Kerber', 'Kessler', 'Kostyuk', 'Krawczyk', 'Kubka', 'Martic', 'Martincova', 'Montgomery', 'Moratelli', 'Navarro', 'Naya', 'Osorio', 'Rosatello', 'Sakkari', 'Sonmez', 'Sramkova', 'Stefani', 'Stevanovic', 'Stollar', 'Svitolina', 'Swiatek', 'Szostak', 'Tomljanovic', 'Trevisan', 'Volynets', 'Waltert', 'Yastremska', 'Zavatska', 'Zimmermann',
    
    'Leicester', 'Barcelona (W)', 'PSG (W)',
    'Alanta (W)', 'Balta (W)', 'Conegliano (W)', 'Prometey (W)',
    'Scandicci (W)', 'Vero Volley (W)',
    'Ukraine (W)', 'Ukraine']; // ' (W)'
    if (title_name!=='Tennis') {
      favorites.push(' (W)')
    }
    
    removeSubstrings = ["(ATP ", "(ATP.", "Russia", " Men. Doubles)", " Men)"];

    td_cells = document.querySelectorAll('tr > td[colspan="2"]');

    removeCells = Array.from(td_cells).filter(cell =>
      removeSubstrings.some(substring => cell.innerText.includes(substring))
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