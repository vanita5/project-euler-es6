/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 */

const isPrime = n => {
    for (let i = 2; i < Math.sqrt(n) + 1; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
};

const nextPrime = n => {
    /* eslint-disable no-constant-condition */
    while (true) {
        n++;
        if (isPrime(n)) return n;
    }
};

const nthPrime = n => {
    let p = 2;
    for (let i = 1; i < n; i++) {
        p = nextPrime(p);
    }
    return p;
};

console.log(`Result: ${nthPrime(10001)}`);
