import Character from '../js/character';

test('Character name is string and (2 <= length <= 10)', () => {
  const character = new Character('Igor', 'Undead');

  const expected = {
    name: 'Igor',
    type: 'Undead',
    level: 1,
    health: 100,
  };

  expect(character).toEqual(expected);
});

test('Character name is not correct)', () => {
  expect(() => {
    const undead = new Character('Lmkkmklkmlkmklmlkmlk', 'Undead');
    console.log(undead);
  }).toThrow('Некорректное имя игрока');
});

test('It is not character type)', () => {
  expect(() => {
    const character = new Character('Igor', 'Elf');
    console.log(character);
  }).toThrow('Некорректный тип игрока');
});
