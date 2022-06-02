import { of, take, tap } from 'rxjs';

const nums$ = of(1, 2, 3, 4, 5);

nums$
  .pipe(
    take(3),
    tap((value) => console.log('tap', value))
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Complete!'),
  });
