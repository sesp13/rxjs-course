import { fromEvent, map, takeWhile } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('complete'),
  });
