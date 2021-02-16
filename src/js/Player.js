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
    this.gold -= 3;
  }
  venture() {
    // this.roll = Math.floor(Math.random() * 3);
    this.roll = 2;
    if (this.roll === 0) {
      this.health -= Math.floor(Math.random() * 21);
    } else if (this.roll === 1) {
      this.iron += Math.floor(Math.random() * 3) +1;
    } else {
      // this.gold += Math.floor(Math.random() * 3) + 1;
    }
  }
}