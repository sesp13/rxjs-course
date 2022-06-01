import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const nums$ = range(1, 5);
nums$
  .pipe(
    tap((x) => {
      console.log('before', x);
      // This return doesn't affect the flow
      return 200;
    }),
    map((val) => val * 10),
    tap({
      next: (value) => console.log('after!!', value),
      complete: () => console.log('Everything was performed!'),
    })
  )
  .subscribe((val) => console.log('subscribe', val));
