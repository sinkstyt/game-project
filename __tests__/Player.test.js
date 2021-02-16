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

  test("should subtract 3 gold when iron purchase is called", () => {
    newPlayer.gold += 2;
    newPlayer.buyIron();
    expect(newPlayer.gold).toEqual(1);
  });

  test("should determine dice roll between 0 and 2, bounds included", () => {
    newPlayer.venture();
    expect(newPlayer.roll).toBeGreaterThanOrEqual(0);
    expect(newPlayer.roll).toBeLessThanOrEqual(2);
  });

  test("should decrement player's health by a random value between 0 and 20, both inclusive", () => {
    newPlayer.venture();
    expect(newPlayer.health).toBeGreaterThanOrEqual(80);
    expect(newPlayer.health).toBeLessThanOrEqual(100);
  });

  test("should increment player's iron by a random value between 1 and 3, both inclusive", () => {
    newPlayer.venture();
    expect(newPlayer.iron).toBeGreaterThanOrEqual(1);
    expect(newPlayer.iron).toBeLessThanOrEqual(3);
  });
});