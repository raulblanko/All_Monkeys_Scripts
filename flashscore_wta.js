// ==UserScript==
// @name        flashscore WTA only
// @namespace   Violentmonkey Scripts
// @match       https://www.flashscore.com/tennis/
// @grant       none
// @version     1.3
// @author      -
// @description 09.09.2023, 10:55:03
// ==/UserScript==
//
// match blank: *://*/*
// 
if (document.querySelector('meta').baseURI.startsWith('https://www.flashscore.com/tennis')) {
  	var button_hide = document.createElement('button');
  	button_hide.textContent = 'Hide all except WTA';
    button_hide.style.position = 'fixed';
    button_hide.style.top = '30px';
  	button_hide.style.right = '30px';
  	document.body.appendChild(button_hide);
  	// button_hide.addEventListener('click', function()
  	button_hide.onclick = function() {
    	var div_players = document.querySelectorAll('div.event__participant');
        var div_favs = document.querySelectorAll('div#my-teams-list span.leftMenu__text');
        var fav_names = [];
        for (let j = 0; j < div_favs.length; j++) {
            fav_names.push(div_favs[j].innerText);
        }
        //console.log(fav_names);
       // svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
       // svgElement.classList.add("new-star");
      //  svgElement.classList.add('leftMenu__icon--star')
       // useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
       // useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "/res/_fs/image/13_symbols/action.svg#star");
      //  svgElement.appendChild(useElement);

        for (let i = 0; i < div_players.length; i++) {
            player = div_players[i];
            name = player.innerText;
            console.log(name);
            if (fav_names.indexOf(name) != -1) {
                console.log(fav_names.indexOf(name));
                // player.appendChild(svgElement.cloneNode(true));
              	player.style.border = '1px dotted blue';
            }
        }
        // Get the headers and spans lists.
        const headers = document.querySelectorAll('div.event__header');
        const spans = document.querySelectorAll('span.event__expanderBlock');

        // Iterate over the spans list and collapse all events that are not WTA.
        for (let i = 0; i < spans.length; i++) {
            const header = headers[i];
            const title = header.innerText;
            const sptitle = spans[i].title;

            if (!title.startsWith('WTA - SINGLES') && !title.startsWith('WTA - DOUBLES') && !title.startsWith('MIXED DOUBLES') && !title.startsWith('GIRLS') && !title.startsWith('CHALLENGER WOMEN') && !title.startsWith('ITF WOMEN')) {
                if (!sptitle.startsWith('Display ')) {
                  	spans[i].click();

                }
              	header.style.display = "none";
            }
        }
	}
}