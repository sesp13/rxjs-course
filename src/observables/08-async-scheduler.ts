import { asyncScheduler } from 'rxjs';

// Get can get this behavior!
// setInterval
// setTimeOut

const greet = () => console.log('Hello world');
const greet2 = (name) => console.log(`Hello ${name}`);

// asyncScheduler.schedule(greet, 2000);
// asyncScheduler.schedule(greet2, 2000, 'Fernando');

const subs = asyncScheduler.schedule(
  function (state: number) {
    console.log(`state: ${state}`);
    // Do this to set an interval
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
