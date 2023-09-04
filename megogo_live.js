// ==UserScript==
// @name        Megogo Live
// @namespace   Violentmonkey Scripts
// @match       https://megogo.net/ua/tv/channels/*
// @grant       none
// @version     1.0
// @run-at      document-end
// @author      raulblanko
// @updateURL   https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/megogo_live.js
// @downloadURL https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/megogo_live.js
// @description 04.09.2023, 12:15:00
// ==/UserScript==
console.log('Megogo Live. start');
function red_live() {
  spans = document.querySelectorAll('span.sc-iwsKbI');
  console.log(spans);
  spans.forEach(element => {
    console.log(element.innerText);
    element.style.color = "gray";
    if (element.innerText.indexOf("Пряма трансляція") !== -1) {
      element.style.color = "red";
    };
    if (element.innerText.indexOf("Прямая трансляция") !== -1) {
      element.style.color = "red";
    };
  });
};

var button_red = document.createElement('button');
button_red.textContent = 'LIVE';
button_red.style.position = 'fixed';
button_red.style.top = '5px';
button_red.style.left = '5px';
document.body.appendChild(button_red);

button_red.onclick = function() {
  red_live();    
};

window.onload = function() {
  red_live();
};

console.log('Megogo Live. end');
