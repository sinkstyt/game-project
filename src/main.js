import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './js/game.js';
import Player from './js/Player.js';


const updateHealth = health => $("#health").text(`Health: ${health}`);
const updateGold = gold => $("#gold").text(`Gold: ${gold}`);
const updateIron = iron => $("#iron").text(`Iron: ${iron}`);

const updateAllStats = (health, gold, iron) => {
  updateHealth(health);
  updateGold(gold);
  updateIron(iron);
};

const headerInformation = (screenName, turns, partsBuilt) => {
  $("#screen-name").text(screenName);
  $(".turn-display").text(turns);
  $("#days-remain").text(`Days Remaining: ${20 - turns}`);
  $("#parts-built").text(`Space Craft Parts Built: ${partsBuilt}`);
};

const updateInventory = (inventory) => {
  $("#inventory").empty();
  inventory.forEach((value, key) => {
    $("#inventory").append(`<li>${key}: ${value}</li>`);
  });
};

const construction = (constructPart) => {
  let msg = "";
  let color = "red";
  if(constructPart) {
    msg = "You have successfully built a Space Craft Part!";
    color = "green";
  } else if (!constructPart) {
    msg = "You can't build without a welder, please select another option!";
  } else {
    msg = "You can't build with less than 5 iron, please select another option!";
  }
  $("#build-msg").text(msg);
  $("#build-msg").attr("class", color);
};

$(document).ready(function() {
  // START PAGE KANBAN captures userName
  
  let player1 = new Player("Alexi");
  let game1 = new Game(player1);

  headerInformation("Main Menu", game1.numTurns, player1.inventory.get("Craft Item"));

  $("#name").text(player1.name);
  updateAllStats(player1.health, player1.gold, player1.iron);
  updateInventory(player1.inventory);

  $('#venture').on("click", function() {
    headerInformation("Adventuring", game1.numTurns, player1.inventory.get("Craft Item"));
    player1.venture();
    updateAllStats(player1.health, player1.gold, player1.iron);
    $("#build-msg").empty();
    // clearAdventureResults();
    // displayAdventureResults();
  });
  $('#shop').on("click", function() {
    // mainMenu.hide();
    $("#build-msg").empty();
  });
  $('#buy').on("click", function() {
    $("#build-msg").empty();
  });
  $('#build').on("click", function() {
    
    construction(player1.constructPart());
  });
});