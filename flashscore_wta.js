// ==UserScript==
// @name        flashscore WTA only
// @namespace   Violentmonkey Scripts
// @match       https://www.flashscore.com/tennis/*
// @match       https://www.flashscore.com/winter-sports/*
// @match       https://www.livescore.in/*
// @grant       none
// @version     1.4
// @run-at      document-end
// @author      raulblanko
// @updateURL   https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/flashscore_wta.js
// @downloadURL https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/flashscore_wta.js
// @description 20.09.2023, 12:00:01
// ==/UserScript==
//
// match blank: *://*/*
//
console.log('flashscore', document.querySelector('meta').baseURI);
if (document.querySelector('meta').baseURI.startsWith('https://www.flashscore.com/tennis')  || document.querySelector('meta').baseURI.startsWith('https://www.flashscore.com/winter-sports')  || document.querySelector('meta').baseURI.startsWith('https://www.livescore.in') ) {
    var button_hide = document.createElement('button');
    button_hide.textContent = 'Highlight Favorites'; //
    if (document.querySelector('meta').baseURI.startsWith('https://www.flashscore.com/tennis')) {
      button_hide.textContent = 'Hide all except Women';
    }
    button_hide.style.position = 'fixed';
    button_hide.style.top = '30px';
    button_hide.style.right = '30px';
    document.body.appendChild(button_hide);
    // button_hide.addEventListener('click', function()
    var divs_all = document.querySelectorAll('.sportName--noDuel div');
    console.log('divs_all', divs_all);

    button_hide.onclick = function() {
        console.log('sportName--noDuel  div', document.querySelectorAll('.sportName--noDuel div'));
        var divs_all_f = document.querySelectorAll('.sportName--noDuel div');
        console.log('divs_all_f', divs_all_f);


          var div_players = document.querySelectorAll('div.event__participant');
        if (!div_players) {
          var div_players = document.querySelectorAll('div.event__participantName');
        };
        var div_favs = document.querySelectorAll('div#my-teams-list span.leftMenu__text');
        var fav_names = [];
        for (let j = 0; j < div_favs.length; j++) {
            fav_names.push(div_favs[j].innerText);
        }
        if (document.querySelector('meta').baseURI.startsWith('https://www.flashscore.com/winter-sports') || document.querySelector('meta').baseURI.startsWith('https://www.livescore.in')) {
          for (let i = 0; i < divs_all_f.length; i++) {
            var player = divs_all_f[i];
            var name = player.innerText;
            console.log(name);
            if (fav_names.indexOf(name) != -1) {
                console.log(fav_names.indexOf(name));
                // player.appendChild(svgElement.cloneNode(true));
                player.style.border = '1px dotted blue';
            }
          for (d of divs_all_f) {
            if (d.className.indexOf('event__header')===0 && d.innerText.indexOf(' - Men ')>=0) {
              d.parentElement.style.display = 'none';
                }
            }
        }
        }

        //console.log(fav_names);
       // svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
       // svgElement.classList.add("new-star");
      //  svgElement.classList.add('leftMenu__icon--star')
       // useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
       // useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "/res/_fs/image/13_symbols/action.svg#star");
      //  svgElement.appendChild(useElement);

        console.log('div_players', div_players);
        for (let i = 0; i < div_players.length; i++) {
            var player = div_players[i];
            var name = player.innerText;
            console.log(name);
            if (fav_names.indexOf(name) != -1) {
                console.log(fav_names.indexOf(name));
                // player.appendChild(svgElement.cloneNode(true));
                player.style.border = '1px dotted blue';
            }
        }
        // Get the headers and spans lists.
        const headers = document.querySelectorAll('div.wclLeagueHeader'); // 'div.event__header' - old design
        //const spans = document.querySelectorAll('span.event__expanderBlock');

        // Iterate over the spans list and collapse all events that are not WTA.
        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const title = header.innerText;
            //const sptitle = spans[i].title;

            if (!title.startsWith('WTA') && !title.startsWith('MIXED DOUBLES') && !title.startsWith('GIRLS') && !title.startsWith('CHALLENGER WOMEN') && !title.startsWith('ITF WOMEN')  && title.indexOf('Slalom - Women')===-1) {
                //if (!sptitle.startsWith('Display ')) {
                  //    spans[i].click();

                //}
                header.style.display = "none";
            }
        }
    }
}