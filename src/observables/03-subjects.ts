import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log(`next ${value}`),
  error: (err) => console.warn(`Error: ${err}`),
  complete: () => console.log(`complete!!`),
};

const interval$ = new Observable<number>((subscription) => {
  const instervalId = setInterval(() => subscription.next(Math.random()), 1000);
  return () => {
    clearInterval(instervalId);
    console.log('Destroyed');
  };
});

const subject$ = new Subject();
const subjectSubscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);

const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  // Kill this subject
  subjectSubscription.unsubscribe();
}, 3500);

