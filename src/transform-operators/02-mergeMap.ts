import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from 'rxjs';

const words$ = of('a', 'b', 'c');

words$.pipe(
  mergeMap((word) =>
    interval(1000).pipe(
      map((i) => word + i),
      take(3)
    )
  )
);
// .subscribe({
//   next: (val) => console.log('next', val),
//   complete: () => console.log('Complete'),
// });

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
  .subscribe(console.log);
