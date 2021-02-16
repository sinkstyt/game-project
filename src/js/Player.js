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
    if (this.iron < 5) {
      return -1;
    } else {
      this.iron -= 5;
      let item = this.inventory.get("Craft Item");
      item += 1;
      this.inventory.set("Craft Item", item);
    }
  }
}