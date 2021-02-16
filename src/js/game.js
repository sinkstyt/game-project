export default class Game {
  constructor(player, numTurns = 0) {
    this.player = player;
    this.isGameOver = "";
    this.numTurns = numTurns;
  }

  endGame() {
    if (this.player.health <= 0 || (this.numTurns === 20 && this.player.inventory.get("Craft Item") < 3)) {
      this.isGameOver = "lose";
    } else if (this.player.inventory.get("Craft Item") === 3) {
      this.isGameOver = "win";
    } else {
      this.isGameOver = "continue"; 
    }
    return this.isGameOver;
  }
}

