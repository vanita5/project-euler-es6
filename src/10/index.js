/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
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

const sumOfPrimesBelow = n => {
    let p = 2;
    let s = 0;
    do {
        s += p;
        p = nextPrime(p);
    } while (p < n);
    return s;
};

console.log(`Result: ${sumOfPrimesBelow(2000000)}`);
