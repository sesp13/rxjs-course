import { debounceTime, distinctUntilChanged, fromEvent, pluck } from 'rxjs';

const click$ = fromEvent(document, 'click');

click$.pipe(debounceTime(3000)).subscribe(console.log);

// Input exercise
const input = document.createElement('input');
document.querySelector('body').appendChild(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
  .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
  .subscribe((value) => {
    console.log(value);
  });
