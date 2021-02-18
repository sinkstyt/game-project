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

const buy = (player1, itemBuying, game1) => {
  const store = {
    'Welder': () => player1.buyWelder(),
    'Iron': () => player1.buyIron(),
    'Iron Maker': () => player1.buyIronMaker(),
  };

  if((store[itemBuying])() === -1) {
    $("#shop-msg").attr("class", "red");
    $("#shop-msg").text("You don't have enough gold to purchase that item!");
    return -1;
  } else {
    $("#shop-msg").text(`You have purchased: ${itemBuying}!`);
    $("#shop-msg").attr("class", "green");
    updateAllStats(player1.health, player1.gold, player1.iron);
    headerInformation("Adventuring", game1.numTurns, player1.inventory.get("Craft Item"));
    updateInventory(player1.inventory);
  }
};

$(document).ready(function() {
  let player1 = new Player("Nat Raymond");
  let game1 = new Game(player1);
  $(".beginButton").click(function(){
    $(".startPage").hide();
    $(".followUp").show();
    player1.name = $("#userName").val();
    $("#followUpText").prepend(`Good Luck ${player1.name}. You have 20 days left.`);
  });
  $(".continueButton").click(function(){
    $(".followUp").hide();
    $(".main").show();
  });
  headerInformation("Main Menu", game1.numTurns, player1.inventory.get("Craft Item"));

  $("#name").text(player1.name);
  updateAllStats(player1.health, player1.gold, player1.iron);
  updateInventory(player1.inventory);

  $('#venture').on("click", function() {
    player1.venture();
    headerInformation("Adventuring", game1.numTurns, player1.inventory.get("Craft Item"));
    updateAllStats(player1.health, player1.gold, player1.iron);
    $("#build-msg").empty();
    game1.endGame();
    $(".shop-container").hide();
    $("#shop-msg").text("");
    // clearAdventureResults();
    // displayAdventureResults();
  });
  $('#shop').on("click", function() {
    // mainMenu.hide();
    $("#build-msg").empty();
    $(".shop-container").toggle();
  });
  $('#build').on("click", function() {
    let constructResult = player1.constructPart();
    construction(constructResult);
    constructResult && game1.endGame();
    $(".shop-container").hide();
    $("#shop-msg").text("");
  });
  $(".shopItem").click((event)=> {
    buy(player1, $(event.target).val(), game1);
  });

  $("#play-again-btn").click(() => {
    alert("hi")
  })
});