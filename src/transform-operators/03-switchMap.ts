import {
  debounceTime,
  fromEvent,
  map,
  mergeMap,
  Observable,
  pluck,
  switchMap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/githubUser.interface';
import { GithubUsersResponse } from '../interfaces/githubUsersResponse.inteface';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const showUsers = (users: GithubUser[]) => {
  orderList.innerHTML = '';
  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'See page';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  // pluck<KeyboardEvent, string>('target', 'value'),
  map<KeyboardEvent, string>((event) => event.target['value']),
  mergeMap<string, Observable<GithubUsersResponse>>((text) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
  ),
  // pluck<GithubUsersResponse, GithubUser[]>('items')
  map<GithubUsersResponse, GithubUser[]>((event) => event.items)
);
// .subscribe(showUsers);

const url = 'https://httpbin.org/delay/1?arg=';
input$
  .pipe(
    pluck('target', 'value'),
    switchMap((text) => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
