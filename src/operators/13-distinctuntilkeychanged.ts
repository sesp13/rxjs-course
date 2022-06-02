import { distinctUntilChanged, from, of } from 'rxjs';

const nums$ = of(1, '1', 3, 3, 2, 2, 4, 4, 5, 3, 1);

nums$.pipe(distinctUntilChanged()).subscribe(console.log);

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

from(characters)
  .pipe(
    distinctUntilChanged((previous, current) => previous.name === current.name)
  )
  .subscribe(console.log);
