// ==UserScript==
// @name        show LIVE at profootball.ua
// @namespace   Violentmonkey Scripts
// @match       https://profootball.ua/static/*
// @grant       none
// @version     1.3
// @author      raulblanko
// @updateURL   https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/profootbal_live.js
// @downloadURL https://raw.githubusercontent.com/raulblanko/All_Monkeys_Scripts/main/profootbal_live.js
// @description 05.09.2023, 14:45:00
// ==/UserScript==
//
// match blank: *://*/*
// document.querySelector('meta').baseURI.startsWith('https://profootball.ua')
if (true) {
    var elements = document.getElementsByTagName("td");
    var wehavelive = 0;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent.indexOf("LIVE!") !== -1) {
            elements[i].style.fontWeight = "bold";
            elements[i].style.color = "red";
            wehavelive = wehavelive + 1;
        }
    };
    var toggleButton = document.createElement("button");
        toggleButton.textContent = "Show LIVE";
        toggleButton.style.position = "fixed";
        toggleButton.style.top = "10px";
        toggleButton.style.right = "10px";
        document.body.appendChild(toggleButton);


    if (wehavelive > -1) {


        var showLive = true;
        var bad_channel = false;
        toggleButton.onclick = function() {
            var trElements = document.getElementsByTagName("tr");
            for (var i = 0; i < trElements.length; i++) {
                var firstTdElement = trElements[i].getElementsByTagName("td")[0];
                var tr_img = trElements[i].querySelector('td>img');
                if (tr_img) {
                    var img = tr_img.getAttribute('src');
                    bad_channel = false;
                    if (img.indexOf("ntv_")  !== -1) {
                        trElements[i].style.display = showLive ? "none" : "";
                        bad_channel = true;
                    }
                }


                var secondTdElement = trElements[i].getElementsByTagName("td")[1];
                if (firstTdElement && firstTdElement.classList.contains("news_time")) {
                    if (secondTdElement && secondTdElement.textContent.indexOf("LIVE!") === -1) {
                        trElements[i].style.display = showLive ? "none" : "";
                    }
                    if (bad_channel) {
                      trElements[i].style.display = showLive ? "none" : "";
                    }
                }
            }
            showLive = !showLive;
            this.textContent = showLive ? "Show LIVE" : "Show all";
        }
    }
}