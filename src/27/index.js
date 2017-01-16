/**
 * Euler discovered the remarkable quadratic formula:
 *
 *      n² + n + 41
 *
 * It turns out that the formula will produce 40 primes for the consecutive integer values 0 ≤ n ≤ 39.
 * However, when n = 40, 40² + 40 + 41 = 40(40 + 1) + 41 is divisible by 41,
 * and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.
 *
 * The incredible formula n² − 79n + 1601 was discovered,
 * which produces 80 primes for the consecutive values 0 ≤ n ≤ 79.
 * The product of the coefficients, −79 and 1601, is −126479.
 *
 * Considering quadratics of the form:
 *
 *      n² + an + b, where |a| < 1000 and |b| ≤ 1000
 *
 *      where |n| is the modulus/absolute value of n
 *      e.g. |11| = 11 and |−4| = 4
 *
 * Find the product of the coefficients, a and b,
 * for the quadratic expression that produces the maximum number of primes for consecutive values of n,
 * starting with n = 0.
 */

import MathUtils from '../utils/math';

const quadraticFormula = (n, a, b) => Math.abs(Math.pow(n, 2) + (a * n) + b);

const maxPrimes = () => {
    let a = 0;
    let b = 0;
    let n = 0;

    for (let _a = -1000; _a < 1000; _a++) {
        for (let _b = -1000; _b <= 1000; _b++) {
            let _n;
            /* eslint-disable no-empty */
            for (_n = 0; MathUtils.isPrime(quadraticFormula(_n, _a, _b)); _n++) {}
            if (_n > n) {
                a = _a;
                b = _b;
                n = _n;
            }
        }
    }
    return a * b;
};

console.log(maxPrimes());
