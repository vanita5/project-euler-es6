/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 */

import MathUtils from '../utils/math';

const nthPrime = n => {
    let p = 2;
    for (let i = 1; i < n; i++) {
        p = MathUtils.nextPrime(p);
    }
    return p;
};

console.log(`Result: ${nthPrime(10001)}`);
