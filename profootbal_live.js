// ==UserScript==
// @name        show LIVE at profootball.ua
// @namespace   Violentmonkey Scripts
// @match       https://profootball.ua/static/*
// @grant       none
// @version     1.2
// @author      raulblanko
// @updateURL   https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/profootbal_live.js
// @downloadURL https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/profootbal_live.js
// @description 21.08.2023, 17:05:01
// ==/UserScript==
//
// match blank: *://*/*
if (document.querySelector('meta').baseURI.startsWith('https://profootball.ua')) {
    var elements = document.getElementsByTagName("td");
    var wehavelive = 0;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent.indexOf("LIVE!") !== -1) {
            elements[i].style.fontWeight = "bold";
            elements[i].style.color = "red";
          	wehavelive = wehavelive + 1;
        }
    }
    if (wehavelive > 0) {
        var toggleButton = document.createElement("button");
        toggleButton.textContent = "Show LIVE";
        toggleButton.style.position = "fixed";
        toggleButton.style.top = "10px";
        toggleButton.style.right = "10px";
        document.body.appendChild(toggleButton);

        var showLive = true;
        toggleButton.onclick = function() {
            var trElements = document.getElementsByTagName("tr");
            for (var i = 0; i < trElements.length; i++) {
                var firstTdElement = trElements[i].getElementsByTagName("td")[0];
                var tr_img = trElements[i].querySelector('td>img');
                if (tr_img) {
                    var img = tr_img.getAttribute('src');
                    if (img.indexOf("ntv_")) {
                        trElements[i].style.display = showLive ? "none" : "";
                    }
                }
                

                var secondTdElement = trElements[i].getElementsByTagName("td")[1];
                if (firstTdElement && firstTdElement.classList.contains("news_time")) {
                    if (secondTdElement && secondTdElement.textContent.indexOf("LIVE!") === -1) {
                        trElements[i].style.display = showLive ? "none" : "";
                    }
                }
            }
            showLive = !showLive;
            this.textContent = showLive ? "Show LIVE" : "Show all";
        }
    }
}