import { first, fromEvent, map, tap } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    tap<PointerEvent>((value) => console.log('tap', value)),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first(({ clientY }) => clientY >= 150)
  )
  .subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('Complete!'),
  });
