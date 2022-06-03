import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

// A lot of subscripcions here
click$.pipe(mergeMap(() => interval$))
// .subscribe(console.log);

// Only keep the last subscription
click$.pipe(switchMap(() => interval$)).subscribe(console.log);