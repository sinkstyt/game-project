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
  constructPart() {
    this.iron -= 5;
  }
}