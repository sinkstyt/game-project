import Player from "../src/js/Player.js";

describe("Player", () => {
  let newPlayer;
  
  beforeEach(() => {
    newPlayer = new Player("Gaston");
  });
  
  test("should return a new instance of Player with player's name passed in upon instantiation.", () => {
    expect(newPlayer.name).toEqual("Gaston");
  });

  test("should return a new instance of Player with keys inventory, gold, and iron assigned to an empty map, 2, and 0 respectively", () => {
    expect(newPlayer.inventory).toEqual({});
    expect(newPlayer.gold).toEqual(2);
    expect(newPlayer.iron).toEqual(0);
  });
}); 