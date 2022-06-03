import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbindd.org/delay/1';

const handleError = (err: AjaxError) => {
  console.warn(err.message);
  return of({ ok: false, users: [] });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$
//   .pipe(catchError(handleError))
//   .subscribe((data) => console.log('getJSON', data));
// obs2$
//   .pipe(catchError(handleError))
//   .subscribe((data) => console.log('ajax', data));

obs$.pipe(catchError(handleError)).subscribe({
  next: (data) => console.log('getJSON', data),
  error: (err) => console.log('error', err),
  complete: () => console.log('Complete'),
});
