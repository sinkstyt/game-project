import Game from "../src/js/game.js";

describe("Game", () => {
  let newGame;

  beforeAll(() => {
    newGame = new Game("player1");
  });

  test("should return false if the end game requirements aren't met", () => {
    expect(newGame.endGame()).toEqual(false);
  });
}); 