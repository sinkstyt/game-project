export default class Player {
  constructor(name) {
    this.name = name;
    this.inventory = new Map(
      [
        ["Weapons", []],
        ["Armor", []],
        ["Craft Item", 0]
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
    this.gold -=5;
  }
}