import Game from "../src/js/game.js";

describe("Game", () => {
    test("Should return a new game with player's name.", () => {
        const newGame = new Game("Tyler");
        expect(newGame.player).toEqual("Tyler");
    });
}); 