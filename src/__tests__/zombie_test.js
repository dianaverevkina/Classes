import Zombie from '../js/zombie';

test('Create Zombie', () => {
  const zombie = new Zombie('Ivan');

  const expected = {
    name: 'Ivan',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});
