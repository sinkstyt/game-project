import Player from "../src/js/Player.js";

describe("Player", () => {
  let newPlayer;
  
  beforeEach(() => {
    newPlayer = new Player("Gaston");
  });
  
  test("should return a new instance of Player with player's name passed in upon instantiation.", () => {
    expect(newPlayer.name).toEqual("Gaston");
  });

  test("should return a new instance of Player with keys inventory, gold, and iron assigned to a map with keys 'Weapon' and 'Armor', 2, and 0 respectively", () => {
    expect(newPlayer.inventory.has("Weapons")).toEqual(true);
    expect(newPlayer.inventory.has("Armor")).toEqual(true);
    expect(newPlayer.gold).toEqual(2);
    expect(newPlayer.iron).toEqual(0);
  });

  test("should store 100 at key 'health' upon instantiaion of Player", () => {
    expect(newPlayer.health).toEqual(100);
  });
});