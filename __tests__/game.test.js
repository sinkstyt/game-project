import Game from "../src/js/game.js";
import Player from "../src/js/Player.js";

describe("Game", () => {
  let newGame;

  beforeAll(() => {
    newGame = new Game("player1");
  });

  test("should return false if the end game requirements aren't met.", () => {
    expect(newGame.endGame()).toEqual(false);
  });

  test("should return true if the player's health reaches 0.", () => {
    const player1 = new Player("Tyler");
    player1.health = 0;
    const newGame1 = new Game(player1);
    expect(newGame1.endGame()).toEqual(true);
  });
}); 