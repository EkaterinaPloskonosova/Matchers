import sortCharacters from '../app';

test('sort characters health', () => {
  const characters = [
    { name: 'Мечник', health: 10 },
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
  ];
  const expected = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];
  const received = sortCharacters(characters);
  expect(received).toEqual(expected);
});
