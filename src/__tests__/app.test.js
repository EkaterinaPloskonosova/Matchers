import sortCharacters from '../app';

test('sort characters health', () => {
  const expected = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];
  const received = sortCharacters();
  expect(received).toEqual(expected);
});
