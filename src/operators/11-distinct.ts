import { distinct, from, of } from 'rxjs';

const nums$ = of(1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

nums$.pipe(distinct()).subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  {
    name: 'Megaman',
  },
  {
    name: 'X',
  },
  {
    name: 'Megaman',
  },
  {
    name: 'Zero',
  },
  {
    name: 'Megaman',
  },
  {
    name: 'X',
  },
  {
    name: 'Batman',
  },
  {
    name: 'Zero',
  },
];

from(characters)
  .pipe(distinct((characters) => characters.name))
  .subscribe(console.log);
