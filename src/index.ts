import { interval,  timer } from 'rxjs';

const observer = {
  next: value => console.log(`next ${value}`),
  complete: () => console.log('Complete!')
}