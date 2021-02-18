import {win, lose, showModal} from "./endGameDisplay.js";

export default class Game {
  constructor(playerObj) {
    this.player = playerObj;
    this.isGameOver = "";
    this.numTurns = 0;
  }

  endTurn() {
    this.numTurns++;

    this.player.inventory.has("Iron Maker") && this.player.useIronMaker();
    return this.numTurns;
  }

  endGame() {
    if (this.player.health <= 0 || (this.numTurns === 20 && this.player.inventory.get("Craft Item") < 3)) {
      this.isGameOver = "lose";
      let death;
      this.numTurns === 20 ? (death = "You couldn't escape by day 20...") : (death = "You lost all your health...");
      lose(death);
      showModal();
    } else if (this.player.inventory.get("Craft Item") === 3) {
      this.isGameOver = "win";
      win(this.numTurns);
      showModal();
    } else {
      this.isGameOver = "continue"; 
      this.endTurn();
    }
    return this.isGameOver;
  }
}