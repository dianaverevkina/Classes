import Swordsman from '../js/swordsman';

test('Create swordsman', () => {
  const swordsman = new Swordsman('Ivan');

  const expected = {
    name: 'Ivan',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});
