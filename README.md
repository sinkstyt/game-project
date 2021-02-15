# Roguelike Sim Game

#### A game that showcases an MVP of:
* 

#### By _**Logan Roth, Morgan Bradford, Tien Nguyen, and Tyler Sinks**_

## Technologies Used

* _CSS, html5, JavaScript_
* _API, webpack, npm_
* _Bootstrap, jQuery_
* _see package.JSON for thorough list of dependencies_

## Description

### DAY 1 brainstorming:
## MVP Goals:

1. player can start game.
    - Overall Game Constructor.
2. player can enter name.
    - Sub Constructor.
3. player choice: 
  * go on adventure (automatic): returns gold/resources(iron).
    - returns gold/iron between 1-3.
    - or lose gold/iron/health 1-3.
    - if health 0 = day lost.
  * go to shop--> browse --> purchase item(s): iron, iron maker, welder(to build parts).
  * construct parts (requires 5 iron + welder)

player can open shop menu.
    - Object w/ arrays depending on what we want (Difficulity, progress, player level etc.)
    - iron price = 3 gold.
    - iron maker(1 iron/day) = 5 gold
    - welder = 3
4. player can view their inventory and stats.
    - Gold
    - Iron
    - Health
    - Equip Weapons, Armor, etc (Different sub categories)**stretch**
    - _Update UI function to be called every click?_

5. player can win: user need 3 spaceship parts in inventory.
    - Dungeon Rewards?
6. player can lose by not finishing in 20 rounds (or reaching 0 hp - stretch?).
7. player can end turn.

* Battle system:
1. player can fight NPCs.
2. player can earn experience.
3. player can gain items (weapons, armor, space parts).

* RPG sim
* A game that can be completed by the user: win/loss.
* In game tasks: defeat boss; max money/buy the land; rescue the prince/princess.
* Economy: gold, shops, trading.
* Resource management: grows over time/rounds. Traits/equipment may increase amount gained.
 
# strech goals: 
* Repeatable story/multiple paths.


# Notes:
- New Feature = New Branch (Example: "game-shop-[person's name]")
- Each Feature should be like task clipboard
- Feature = done, everyone on the team meets to do a PR and merge

## Setup/Installation Requirements

View directly:
* You can view this directly on my <a href="https://sinkstyt.github.io/[link]" target="_blank">GitHub pages</a>.

Download the repo:
* Go to https://github.com/sinkstyt/[{#LINK}]
* Navigate to and click the green <img src="code.PNG" alt="code" height="20"> button on middle upper right part of webpage.
* Click on "Download ZIP"
* Navigate to the downloaded zip and open it.
* Open the folder inside the zip.
* Double-click on the HTML file to open it in your default browser.

Clone the repo:
* Go to https://github.com/sinkstyt/[{#LINK}]
* Navigate to and click the green <img src="code.PNG" alt="code" height="20"> that is near the right edge of the tab bar atop this README.
* Copy the HTTPs address to your clipboard.
* Open terminal or bash and navigate to or create a directory into which you will store the entire project on your machine.
* Once you have switched into your desired directory, in your terminal or command line prompt, enter the following:
> `$ git clone [paste link]` and press <kbd>ENTER</kdb>
* Change directory into the new root folder of this project
> `$ cd {this-repo-name}`
* Type "code ." into your terminal to launch your default text/code editer at this directory
> `$ code .`
* Right click click on the index.html in the file explorer (VS Code) and select "copy absolute path"
* Launch your web browser and paste into the address bar this absolute path currently on your clipboard

## How to Get Your Own API key
* destination will be unique to project needs
* make sure .env is listed in .gitignore (one does NOT want to share API key/s accidentally)
* create a .env file at the root directory
* get your own unique key from `{URL_FOR_API_KEY_GENERATION}`
* store the key _without quotes_ in .env preceded by `API_KEY = `

## Known Bugs

* _Any known issues_
* _should go here_

## License
_GPL_

Copyright (c) 2021 **_Tyler Sinks_**

## Contact Information
* Reach Tyler: via <a href="https://www.linkedin.com/in/tyler-sinks-93438137/" target="_blank">LinkedIn</a> or <a href="mailto:tyler.sinksa@gmail.com" target="_blank">email</a>.<br>
Checkout Tyler's <a href="https://github.com/sinkstyt" target="_blank">GitHub profile</a>.</li>


Some Brainstorming notes from Day 1:

