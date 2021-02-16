export default class Player {
  constructor(name) {
    this.name = name;
    this.inventory = new Map(
      [
        ["Weapons", []],
        ["Armor", []],
        ["Craft Item", 0],
        ["Iron Maker", 0]
      ]
    );
    this.gold = 2;
    this.iron = 0;
    this.health = 100;
  }
  buyIron() {
    if (this.gold < 3) {
      return -1;
    } else {
      this.gold -= 3;
      this.iron++;
    }
  }
  buyIronMaker() {
    if (this.gold < 5) {
      return -1;
    } else {
      this.gold -=5;
      this.inventory.set("Iron Maker", 1);
    }
  }
  useIronMaker() {
    this.iron += Math.floor(Math.random() * 2) + 1;
  }
  buyWelder() {
    
  }
}