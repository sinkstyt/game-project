import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './js/game.js';
import Player from './js/Player.js';

$(document).ready(function() {
  let player = new Player("Nat Raymond")
  let game = new Game(player)
  $(".beginButton").click(function(){
    $(".startPage").hide()
    $(".followUp").show()
    player.name = $("#userName").val();
    game.numTurns = 20;
    $("#followUpText").prepend(`Good Luck ${player.name}. You have ${game.numTurns} days left.`)
  })
  $(".continueButton").click(function(){
    $(".followUp").hide();
    $(".mainGame").show();
  })
});