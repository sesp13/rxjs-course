import {
  asyncScheduler,
  distinctUntilChanged,
  fromEvent,
  pluck,
  throttleTime,
} from 'rxjs';

const click$ = fromEvent(document, 'click');

click$.pipe(throttleTime(3000)).subscribe(console.log);

// Input exercise
const input = document.createElement('input');
document.querySelector('body').appendChild(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe((value) => {
    console.log(value);
  });
