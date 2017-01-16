/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

import MathUtils from '../utils/math';

const sumOfPrimesBelow = n => {
    let p = 2;
    let s = 0;
    do {
        s += p;
        p = MathUtils.nextPrime(p);
    } while (p < n);
    return s;
};

console.log(`Result: ${sumOfPrimesBelow(2000000)}`);
