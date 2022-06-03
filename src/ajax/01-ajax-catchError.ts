import { catchError, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/usersxxx?per_page=5';

const handleErrors = (response: Response) => {
  if (!response.ok) throw new Error(response.statusText);
  return response;
};

const handleErrorsRxjs = (error: AjaxError) => {
  console.warn('Error in', error.message);
  return of([]);
};

// const fetchPromise = fetch(url);

// fetchPromise
//   .then((res) => res.json())
//   .then((data) => console.log('data', data))
//   .catch((err) => console.warn('error on users', err));

// fetchPromise
//   .then(handleErrors)
//   .then((res) => res.json())
//   .then((data) => console.log('data', data))
//   .catch((err) => console.warn('error on users', err));

ajax(url)
  .pipe(pluck('response'), catchError(handleErrorsRxjs))
  .subscribe(console.log);
