export default class Player {
  constructor(name) {
    this.name = name;
    this.inventory = new Map(
        [
            ["Weapons", []],
            ["Armor", []]
        ]
    );
    this.gold = 2;
    this.iron = 0;
  }

}