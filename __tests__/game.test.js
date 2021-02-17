import Game from "../src/js/game.js";
import Player from "../src/js/Player.js";

describe("Game", () => {
  let newGame;
  let player1;

  beforeAll(() => {
    player1 = new Player("Tyler");
    newGame = new Game(player1);
  });

  test("should assign newGame.isGameOver to the string 'continue' if the end game requirements aren't met", () => {
    expect(newGame.endGame()).toEqual("continue");
  });

  test("should assign newGame.isGameOver to the string 'lose' if player's health reaches 0 or a negative value.", () => {
    player1.health = 0;
    expect(newGame.endGame()).toEqual("lose");
  });

  test("should return assign newGame.isGameOver the string 'lose' if the number of turns is 20 and player doesn't have 3 Craft Itmes.", () => {
    newGame.numTurns = 20;
    expect(newGame.endGame()).toEqual("lose");
  });

  test("should assign newGame.isGameOver to 'win' if number of turns is less than 20 and the player has three Craft Items", () => {
    player1.health = 100;
    player1.inventory.set("Craft Item", 3);
    expect(newGame.endGame()).toEqual('win');
  });

  test("Should return number of turns incremented by 1 and have the iron maker produce random iron from 1 - 3 if obtained.", () => {
    newGame.numTurns = 1;
    expect(newGame.endTurn()).toEqual(1);
  });
}); 