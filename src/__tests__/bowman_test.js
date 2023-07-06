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
