export default class Player {
  constructor(name) {
    this.name = name;
    this.inventory = new Map(
      [
        ["Weapons", []],
        ["Armor", []],
        ["Craft Item", 0],
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
    if (this.gold < 3) {
      return -1;
    }
    this.gold -= 3;
    this.inventory.set("Welder", 1);
  }
  constructPart() {
    if (this.iron < 5) {
      return -1;
    } else {
      this.iron -= 5;
      let item = this.inventory.get("Craft Item");
      item += 1;
      this.inventory.set("Craft Item", item);
    }
  } 
  venture() {
    let roll = Math.floor(Math.random() * 3);
    if (roll === 0) {
      return this.health -= Math.floor(Math.random() * 21);
    } else if (roll === 1) {
      return this.iron += Math.floor(Math.random() * 3) + 1;
    } else {
      return this.gold += Math.floor(Math.random() * 3) + 1;
    }
  }

}