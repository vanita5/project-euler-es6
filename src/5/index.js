/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

let i = 1;

/* eslint-disable no-constant-condition */
while (true) {
    let sm = true;
    for (let y = 1; y <= 20; y++) {
        if (i % y !== 0) {
            sm = false;
            break;
        }
    }
    if (sm) {
        console.log(`Result: ${i}`);
        break;
    }
    i++;
}
