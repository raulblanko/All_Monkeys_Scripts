# All_Monkeys_Scripts

## flashscore_wta.js

The **Violentmonkey UserScript** will hide all tennis events on [**Flashscore**](https://www.flashscore.com/tennis/) except for Women singles, doubles, and mixed doubles events. It will also highlight all players from your favorites list that plays in these events.

To use the script, simply install the [**Violentmonkey extension**](https://violentmonkey.github.io/) for your browser and then create a new script with the code you provided. Once the script is installed and enabled, it will automatically run each time you visit the [Flashscore tennis page.](https://www.flashscore.com/tennis/)

Here is a breakdown of what the script does:  

- It checks to see if you are on a [Flashscore tennis page.](https://www.flashscore.com/tennis/)  
- If so, it creates a new button and appends it to the right top corner of the page.  
- The button is labeled "Hide all except Women".  

When you click the button, the script performs the following steps:
- It gets a list of all the player names in the events on the page.
- It gets a list of all the favorite players names from your [Flashscore favorites list.](https://www.flashscore.com/favorites/)
- It iterates over the list of player names and checks to see if any of the players are in your favorites list.  
- If a player is in your favorites list, the script highlights the player.  
- The script then iterates over the list of event headers and event expander spans.  
- If the event is not a Women event, the script collapses the event and hides the event header.  

To use the script to highlight all of your favorite Women events, simply add your favorite Women players to your [Flashscore favorites list.](https://www.flashscore.com/favorites/)

