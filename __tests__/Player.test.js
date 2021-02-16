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

  test("should increment player's iron by a random value between 1 and 3, both inclusive. OR, should increment player's gold by a random value between 1 and 3, both inclusive. OR, should increment player's gold by a random value between 1 and 3, both inclusive", () => {
    newPlayer.venture();
    expect(newPlayer.iron).toBeGreaterThanOrEqual(0);
    expect(newPlayer.iron).toBeLessThanOrEqual(3);
    expect(newPlayer.gold).toBeGreaterThanOrEqual(2);
    expect(newPlayer.gold).toBeLessThanOrEqual(5);
  });
  
  test("should subtract 5 iron from newPlayer.iron", () => {
    newPlayer.iron += 7;
    newPlayer.constructPart();
    expect(newPlayer.iron).toEqual(2);
  });

  test("should create 1 space part", () => {
    newPlayer.iron += 7;
    newPlayer.constructPart();
    expect(newPlayer.inventory.get("Craft Item")).toEqual(1);
  });

  test("should return -1 if iron is less than 5", () => {
    expect(newPlayer.constructPart()).toEqual(-1);
  });

  test("should decrement player's health by a random value between 0 and 20, both inclusive", () => {
    let result = newPlayer.venture();
    while(result < 80) {
      result = newPlayer.venture();
    } 
    expect(newPlayer.health).toBeGreaterThanOrEqual(80);
    expect(newPlayer.health).toBeLessThanOrEqual(100);
  });

  test("should increment player's iron value by one", () => {
    newPlayer.gold = 4;
    newPlayer.buyIron();
    expect(newPlayer.iron).toEqual(1);
  });

  test("should return -1 if gold is less than 3", () => {
    expect(newPlayer.buyIron()).toEqual(-1);
  });

  test("should subtract 5 gold from this.player", () => {
    newPlayer.gold += 5;
    newPlayer.buyIronMaker();
    expect(newPlayer.gold).toEqual(2);
  });

  test("should add iron maker to inventory", () => {
    newPlayer.gold += 5;
    newPlayer.buyIronMaker();
    expect(newPlayer.inventory.get("Iron Maker")).toEqual(1);
  });

  test("should return -1 if gold is less than 5", () => {
    expect(newPlayer.buyIronMaker()).toEqual(-1);
  });

  test("should add 1-2 iron to this.iron", () => {
    newPlayer.useIronMaker();
    expect(newPlayer.iron).toBeGreaterThanOrEqual(1);
    expect(newPlayer.iron).toBeLessThanOrEqual(2);
  });

  test("should subtract 3 gold from newPlayer.gold", () => {
    newPlayer.gold += 2;
    newPlayer.buyWelder();
    expect(newPlayer.gold).toEqual(1);
  });

  test("should add 1 to the value stored at inventory.get('Welder')", () => {
    newPlayer.gold += 2;
    newPlayer.buyWelder();
    expect(newPlayer.inventory.get("Welder")).toEqual(1);
  });

  test("should return -1 if newPlayer.gold is less than 3", () => {
    expect(newPlayer.buyWelder()).toEqual(-1);
  });
});