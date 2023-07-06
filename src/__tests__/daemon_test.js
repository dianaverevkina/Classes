import Daemon from '../js/daemon';

test('Create daemon', () => {
  const daemon = new Daemon('Ivan');

  const expected = {
    name: 'Ivan',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});
