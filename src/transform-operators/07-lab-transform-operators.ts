import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

interface UserPassword {
  email: string;
  password: string;
}

// Helper
const httpRequestLogin = (userPassword: UserPassword) =>
  ajax.post('https://reqres.in/api/login?delay=1', userPassword).pipe(
    map((value) => value.response['token']),
    catchError((err) => of('error-token'))
  );

const body = document.querySelector('body');
// Create form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const btnSubmit = document.createElement('button');

// Configurations
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

btnSubmit.textContent = 'Login';

// Add form to DOM
form.appendChild(inputEmail);
form.appendChild(inputPassword);
form.appendChild(btnSubmit);
body.appendChild(form);

// Streams
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
  tap((event) => event.preventDefault()),
  map((event) => {
    return {
      email: event.target[0].value,
      password: event.target[1].value,
    };
  })
);

submitForm$
  .pipe(
    // merge performs all the requests
    // mergeMap(httpRequestLogin),

    // switch only perform the last request
    // switchMap(httpRequestLogin),

    // exhaust only perform the first request
    exhaustMap(httpRequestLogin)
  )
  .subscribe((token) => {
    console.log(token);
  });
