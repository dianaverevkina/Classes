import Undead from '../js/undead';

test('Create Undead', () => {
  const undead = new Undead('Ivan');

  const expected = {
    name: 'Ivan',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});
