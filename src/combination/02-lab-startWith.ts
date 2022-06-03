import { startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerText = 'loading...';

const body = document.querySelector('body');

// Stream
ajax
  .getJSON('https://reqres.in/api/users/2?delay=3')
  .pipe(startWith(true))
  .subscribe((res) => {
    if (res == true) {
      body.appendChild(loadingDiv);
    } else {
      body.removeChild(loadingDiv);
    }
  });
