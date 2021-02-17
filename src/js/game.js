import {win, lose} from "./endGameDisplay.js";

export default class Game {
  constructor(player, numTurns = 0) {
    this.player = player;
    this.isGameOver = "";
    this.numTurns = numTurns;
  }

  endTurn() {
    this.numTurns++;
    this.player.inventory.has("Iron Maker") && this.player.userIronMaker();
    return this.numTurns;
  }

  endGame() {
    if (this.player.health <= 0 || (this.numTurns === 20 && this.player.inventory.get("Craft Item") < 3)) {
      this.isGameOver = "lose";
      lose();
    } else if (this.player.inventory.get("Craft Item") === 3) {
      this.isGameOver = "win";
      win(this.numTurns);
    } else {
      this.isGameOver = "continue"; 
      this.endTurn();
    }

    return this.isGameOver;
  }
}