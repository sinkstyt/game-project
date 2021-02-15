export default class Game {
  constructor(player, isGameOver = false, numTurns = 0) {
    this.player = player;
    this.isGameOver = isGameOver;
    this.numTurns = numTurns;
  }
}