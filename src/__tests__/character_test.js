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

test('Function levelUp - check error', () => {
  const character = new Character('Igor', 'Bowman');
  character.health = 0;
  expect(() => {
    character.levelUp();
  }).toThrow('Невозможно повысить уровень');
});

test('Function levelUp works', () => {
  const character = new Character('Igor', 'Bowman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);
});

// test('Function levelUp works', () => {
//   const character = new Character('Igor', 'Bowman');
//   character.levelUp();
//   expect(character.level).toBe(2);
//   expect(character.health).toBe(100);
// });

// test('check function damage', () => {
//   const character = new Character('Igor', 'Bowman');
//   character.defence = 30;
//   character.damage(12);
//   expect(character.health).toBeCloseTo(91.6);
// });
