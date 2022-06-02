import { from, map, reduce, scan } from 'rxjs';

const nums = [1, 2, 3, 4, 5];

const totalAcumulator = (acumulator, current) => acumulator + current;

//Reduce
from(nums).pipe(reduce(totalAcumulator, 0));
// .subscribe(console.log);

// Scan
from(nums).pipe(scan(totalAcumulator, 0));
// .subscribe(console.log);

// redux
interface User {
  id?: string;
  auth?: boolean;
  token?: string;
  age?: number;
}

const users: User[] = [
  { id: 'fher', auth: false, token: null },
  { id: 'fher', auth: false, token: 'ABC' },
  { id: 'fher', auth: true, token: 'ABC123' },
];

const state$ = from(users).pipe(
  scan((acc, cur) => {
    return { ...acc, ...cur };
  })
);

const id$ = state$.pipe(map((state) => state)).subscribe(console.log);
