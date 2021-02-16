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