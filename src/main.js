import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './js/game.js';
import Player from './js/Player.js';


$(document).ready(function() {
  // START PAGE KANBAN captures userName
  
  let player1 = new Player("Alexi");
  let game1 = new Game(player1);

  $('#venture').click(function() {
    player1.venture();
    // clearAdventureResults();
    // displayAdventureResults();
  });
  $('#shop').click(function() {
    mainMenu.hide()
    $('#shop-menu').show();
  });

  $('#build').click(function() {

  });

});