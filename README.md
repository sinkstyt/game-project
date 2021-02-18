# Planet Escape
_originally created February 15 through 18, 2021_   <img src="src/images/astronaut_jumping.gif" alt="spaceman jumping animation" height="200">

#### An RPG-esque game that showcases an MVP of:
* A role-playing game that can be completed by the user: win/loss.
* In game options include: go on adventure(s), build parts for your space ship, and buy items in the shop

#### By _**Logan Roth, Morgan Bradford, Tien Nguyen, and Tyler Sinks**_

## Technologies Used

* _CSS, html5, JavaScript_
* _webpack, npm_
* _Bootstrap, jQuery_
* _see package.JSON for thorough list of dependencies_

## Description

#### MVP Goals:

1. Player can start game.
2. Player can enter name and is greeted with scenario description, each turn's possible events, and object of the game.
3. Each turn allows player to choose from these options:
>  1. go on adventure (automatic): returns gold/resources(iron) or health decreases
>  2. open shop menu with three options: buy iron maker, buy iron, buy welder.
>  3. assemble a part to repair your space craft.
4. Player can view their inventory and stats.
5. Player can win by building 3 spaceship parts before 20 days elapse.
6. Player can lose by not finishing in 20 rounds or reaching health < or equal to 0.
7. Day is counted when successful player action occurs.

#### Strech Goals: 
1. Repeatable story/multiple paths.
2. Events that happen each turn are populated to a game log.
3. Battle system:
4. Player can fight NPCs.
5. Player can earn experience.
6. Player can gain items (weapons, armor, space parts).

## Setup/Installation Requirements

Download the repo:
* Go to https://github.com/sinkstyt/game-project
* Navigate to and click the green ![green code button](src/images/code_button.png) button on middle upper right part of webpage.
* Click on "Download ZIP"
* Navigate to the downloaded zip and open it.
* Open the folder inside the zip.
* Double-click on the HTML file to open it in your default browser.

Clone the repo:
* Go to https://github.com/sinkstyt/game-project
* Navigate to and click the green ![green code button](src/images/code_button.png) that is near the right edge of the tab bar atop this README.
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
* Check to see that you have npm installed with the prompt `$ npm -v`. As long as the first number in the version is 3 or greater, you should not anticipate any problems. If you are using OS X or greater and npm is not installed, use the command `$ brew install node`
* Check node version with `$ node -v`. Node version should start with a 4 or higher.
* For Windows users without npm, go to https://nodejs.org/en/download/ and download the LTS (long term support) option most appropriate for your system
* From within the root directory, use the following commands to have npm (Node package manager) install other dependencies
> `$ npm install`
* To see the project assembled and rendered in browser, use the following npm prompt. A tab should open to the rendered page.
> `$ npm run start`

## Known Bugs

* _No known bugs at this time_

## License
_GPL_

Copyright (c) 2021 **_Logan Roth, Morgan Bradford, Tien Nguyen, and Tyler Sinks_**

## Contact Information
* Reach Logan via <a href="https://www.linkedin.com/in/lo-gr/" target="_blank">LinkedIn</a> or <a href="mailto:diamondintheroth@gmail.com" target="_blank">email</a>.<br>
Checkout Logan's <a href="https://github.com/Lo-GR" target="_blank">GitHub profile</a>.</li>
* Reach Tien: via <a href="https://www.linkedin.com/in/nguyentien96/" target="_blank">LinkedIn</a> or <a href="mailto:tien96ng@gmail.com" target="_blank">email</a>.<br>
Checkout Tien's <a href="https://github.com/Tien96ng" target="_blank">GitHub profile</a>.</li>
* Reach Morgan: via <a href="https://www.linkedin.com/in/morganjbradford/" target="_blank">LinkedIn</a> or <a href="mailto:morganjbradford95@gmail.com" target="_blank">email</a>.<br>
Checkout Morgan's <a href="https://github.com/" target="_blank">GitHub profile</a>.</li>
* Reach Tyler: via <a href="https://www.linkedin.com/in/tyler-sinks-93438137/" target="_blank">LinkedIn</a> or <a href="mailto:tyler.sinks@gmail.com" target="_blank">email</a>.<br>
Checkout Tyler's <a href="https://github.com/sinkstyt" target="_blank">GitHub profile</a>.</li>
