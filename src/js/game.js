export default class Game {
  constructor(player, isGameOver = false, numTurns = 0) {
    this.player = player;
    this.isGameOver = isGameOver;
    this.numTurns = numTurns;
  }

  endGame() {
    this.player.health <= 0 || (this.numTurns === 20 && this.player.inventory.get("Craft Item") < 3) ?  this.isGameOver = true : this.isGameOver = false;
    return this.isGameOver;
  }
}