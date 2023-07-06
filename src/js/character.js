const types = [
  'Bowman',
  'Daemon',
  'Magician',
  'Swordsman',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя игрока');
    }

    if (!types.includes(type)) {
      throw new Error('Некорректный тип игрока');
    }

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;
  }
}
