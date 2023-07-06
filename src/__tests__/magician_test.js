import Magician from '../js/magician';

test('Create magician', () => {
  const magician = new Magician('Ivan');

  const expected = {
    name: 'Ivan',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});
