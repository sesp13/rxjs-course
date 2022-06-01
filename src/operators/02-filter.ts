import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(20, 30).pipe(
  filter((val, index) => {
    console.log(val, index);
    return val % 2 == 1;
  })
);
// .subscribe(console.log);

interface Character {
  type: string;
  name: string;
}

const characters: Character[] = [
  {
    type: 'hero',
    name: 'Batman',
  },
  {
    type: 'hero',
    name: 'Robin',
  },
  {
    type: 'villain',
    name: 'Joker',
  },
];

from(characters).pipe(filter((value) => value.type == 'hero'));
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event: KeyboardEvent) => event.code),
  filter((code) => code == 'Space')
);

keyup$.subscribe(console.log);
