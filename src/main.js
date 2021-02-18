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

const buyMsg = (constructPart) => {
  let msg = "";
  let color = "red";
  let result = false;

  if(constructPart) {
    msg = "You have successfully built a Space Craft Part!";
    color = "green";
    result = true;
  } else if(constructPart === -1){
    msg = "You can't build with less than 5 iron, please select another option!";
  } else if (!constructPart) {
    msg = "You can't build without a welder, please select another option!";
  } 
  $("#eventStuff").text(msg);
  $("#eventStuff").attr("class", color);
  return result;
};

const buy = (player1, itemBuying, game1) => {
  const store = {
    'Welder': () => player1.buyWelder(),
    'Iron': () => player1.buyIron(),
    'Iron Maker': () => player1.buyIronMaker(),
  };

  if((store[itemBuying])() === -1) {
    $("#eventStuff").attr("class", "red");
    $("#eventStuff").text("You don't have enough gold to purchase that item!");
    return -1;
  } else {
    // $("#eventStuff").empty();
    $("#eventStuff").text(`You have purchased: ${itemBuying}!`);
    $("#eventStuff").attr("class", "green");
    updateAllStats(player1.health, player1.gold, player1.iron);
    headerInformation("Adventuring", game1.numTurns, player1.inventory.get("Craft Item"));
    updateInventory(player1.inventory);
  }
};

const resetPlayer = (player) => {
  player.inventory = new Map(
    [
      ["Weapons", []],
      ["Armor", []],
      ["Craft Item", 0],
    ]
  );
  player.gold = 2;
  player.iron = 0;
  player.health = 100;
};

const resetGame = (game, player) => {
  game.player = player;
  game.isGameOver = "";
  game.numTurns = 0;
};

const startGame = (player1) => {

  $(".modal").modal('hide');
  $(".startPage").show();
  $(".main").hide();
  $(".beginButton").click(function(){
    $(".startPage").hide();
    $(".followUp").show();
    player1.name = $("#userName").val();
    $("#followUpText").text("");
    $("#followUpText").prepend(`Good Luck ${player1.name}. You have 20 days left.`);
  });
  $(".continueButton").click(function(){
    $(".followUp").hide();
    $(".main").show();
  });
};

$(document).ready(function() {
  let player1 = new Player("Nat Raymond");
  let game1 = new Game(player1);
  startGame(player1);
  headerInformation("Main Menu", game1.numTurns, player1.inventory.get("Craft Item"));

  $("#name").text(player1.name);
  updateAllStats(player1.health, player1.gold, player1.iron);
  updateInventory(player1.inventory);

  $('#venture').on("click", function() {
    let msg = player1.venture();
    updateAllStats(player1.health, player1.gold, player1.iron);
    game1.endGame();
    headerInformation("Adventuring", game1.numTurns, player1.inventory.get("Craft Item"));
    $(".shop-container").hide();
    $("#eventStuff").attr("class", "blue");
    $("#eventStuff").text(msg);
  });  
  $('#shop').on("click", function() {
    $(".shop-container").toggle();
  });
  $('#build').on("click", function() {
    let constructResult = player1.constructPart();

    buyMsg(constructResult);
    player1.inventory.get("Welder") !== 1 && player1.inventory.get("Iron Maker") !== 1 && constructResult && game1.endGame();
    if(constructResult === (-1)) {
      $("#eventStuff").text("You can't build with less than 5 iron, please select another option!");
      $("#eventStuff").attr("class", "red");
    }

    updateInventory(player1.inventory);
    updateIron(player1.iron);
    headerInformation("Building", game1.numTurns, player1.inventory.get("Craft Item"));
    $(".shop-container").hide();
  });
  $(".shopItem").click((event)=> {
    buy(player1, $(event.target).val(), game1);
  });

  $("#play-again-btn").click(() => {
    //location.reload();
    resetPlayer(player1);
    resetGame(game1, player1);
    startGame(player1);
    headerInformation("Main Menu", game1.numTurns, player1.inventory.get("Craft Item"));

    $("#name").text(player1.name);
    updateAllStats(player1.health, player1.gold, player1.iron);
    updateInventory(player1.inventory);
  });
});