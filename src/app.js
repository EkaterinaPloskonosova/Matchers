const characters = [
  { name: 'Мечник', health: 10 },
  { name: 'Маг', health: 100 },
  { name: 'Лучник', health: 80 },
];
export default function sortCharacters() {
  return characters.sort((a, b) => b.health - a.health);
}
