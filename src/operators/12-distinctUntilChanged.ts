import { distinctUntilChanged, distinctUntilKeyChanged, from, of } from 'rxjs';
interface Character {
  name: string;
}

const characters: Character[] = [
  {
    name: 'Megaman',
  },
  {
    name: 'Megaman',
  },
  {
    name: 'Zero',
  },
  {
    name: 'Dr Willy',
  },
  {
    name: 'X',
  },
  {
    name: 'X',
  },
  {
    name: 'Zero',
  },
];

from(characters).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);
