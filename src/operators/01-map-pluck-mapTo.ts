import { fromEvent, range } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1, 5)
//   .pipe(map<number, string>((x) => (x * 10).toString()))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(map((event) => event.code));
const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI'));
const keyupMapTo$ = keyup$.pipe(mapTo('Key pressed'));

keyup$.subscribe(console.log);
keyupCode$.subscribe((result) => console.log('map', result));
keyupPluck$.subscribe((result) => console.log('pluck', result));
keyupMapTo$.subscribe((result) => console.log('mapTo', result));
