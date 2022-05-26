import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();
const myObservable$ = new Observable<string>((subs) => {
  subs.next('Hello');
  subs.next('World');

  // Force an error;
  // subs.error("This is an error");

  subs.complete();

  // These data won't be emitted
  subs.next('Hello');
  subs.next('World');
});

// Subscribe using observer

const observer: Observer<any> = {
  next: (value) => console.log(`next ${value}`),
  error: (err) => console.log(`Error!! ${err}`),
  complete: () => console.log(`complete!!`),
};

myObservable$.subscribe(observer);
