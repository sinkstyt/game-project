import Player from "../src/js/Player.js";

describe("Player", () => {
    
  
  
  test("should return a new instance of Player with player's name passed in upon instantiation.", () => {
    const newPlayer = new Player("Jerry");
    expect(newPlayer.name).toEqual("Jerry");
  });
}); 