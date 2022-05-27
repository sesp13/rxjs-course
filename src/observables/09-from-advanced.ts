import { of, from } from 'rxjs';

/*
  of = take args and generate a secuence
  from = expects array, promise, iterable, observable
*/

const observer = {
  next: (value) => console.log(`next`, value),
  complete: () => console.log('Complete!'),
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Santiago');
const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(observer);

// source$.subscribe( async(response) => {
//   const dataResponse = await response.json();
//   console.log(dataResponse);
//

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = myGenerator();

// for(let id of myIterable){
//   console.log(id);
// }

from(myIterable).subscribe(observer);
