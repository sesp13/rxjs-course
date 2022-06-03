import { endWith, of, startWith } from 'rxjs';

const nums$ = of(1, 2, 3);

nums$
  .pipe(startWith('a', 'b', 'c'), endWith('x', 'y', 'z'))
  .subscribe(console.log);
