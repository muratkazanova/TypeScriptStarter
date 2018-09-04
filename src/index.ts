import { interval } from "rxjs";
import { take } from "rxjs/operators";

import { Employee } from "./Employee";

const empMK = new Employee(1, "Murat", "Kazanova");
console.log(empMK.toString());

const source$ = interval(1000).pipe(take(3));
source$.subscribe(i => console.log(`Returned value: ${i}`));
