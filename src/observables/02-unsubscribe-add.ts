import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log(`next ${value}`),
  error: (err) => console.warn(`Error: ${err}`),
  complete: () => console.log(`complete!!`),
};

const interval$ = new Observable<number>((subscriber) => {
  //Create a counter.
  let seconds = 0;
  const inserval = setInterval(() => {
    // console.log("Interval");
    subscriber.next(seconds);
    seconds++;
  }, 1000);

  setTimeout(() => subscriber.complete(), 2500);

  // This is called after the call of unsubscribe()
  return () => {
    console.log('Interval completed');
    clearInterval(inserval);
  };
});

// const subscription = interval$.subscribe((num) => console.log(`num ${num}`));
// const subscription2 = interval$.subscribe((num) => console.log(`num ${num}`));
// const subscription3 = interval$.subscribe((num) => console.log(`num ${num}`));

const subscription = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription.add(subscription2);
subscription2.add(subscription3);

setTimeout(() => {
  subscription.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log('Completed timeout');
}, 3000);
