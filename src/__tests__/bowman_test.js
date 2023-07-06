import Bowman from '../js/bowman';

test('Create bowman', () => {
  const bowman = new Bowman('Ivan');

  const expected = {
    name: 'Ivan',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };

  expect(bowman).toEqual(expected);
});

test('Function levelUp works', () => {
  const character = new Bowman('Igor');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);
  expect(character.defence).toBe(30);
  expect(character.attack).toBe(30);
});

test('check function damage with health > 0', () => {
  const character = new Bowman('Igor');
  character.damage(12);
  expect(character.health).toBe(91);
});

test('check function damage wtih health <= 0', () => {
  const character = new Bowman('Igor');
  character.health = -30;
  character.damage(12);
  expect(character.health).toBe(0);
});
