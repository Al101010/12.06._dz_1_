import Zombie from '../Zombie';

test('checking the Zombie', () => {
    const result = new Zombie('Oleg');
    const zombie = {name: 'Oleg', type: 'Zombie', health: 100, level: 1, attack: 10, defence: 40};
    expect(result).toEqual(zombie);
  });
