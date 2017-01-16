/**
 * Math utilities for Project Euler problems
 */

class MathUtils {

    /**
     * Get Fibonacci numbers up to max (= 4000000)
     *
     * @param max
     * @param arr
     * @returns {Array.<*>}
     */
    static fibonaccis(max, arr = [0, 1]) {
        const n = arr[arr.length - 1] + arr[arr.length - 2];

        if (n > max) return arr;

        arr.push(n);
        return MathUtils.fibonaccis(max, arr);
    }

    /**
     * Get first n natural numbers.
     *
     * @param n
     * @return {Array.<*>}
     */
    static naturals(n) {
        return Array.from(Array(n + 1).keys()).slice(1);
    }

    /**
     * Check if n is a prime.
     *
     * @param n
     * @return {boolean}
     */
    static isPrime(n) {
        for (let i = 2; i < Math.sqrt(n) + 1; i++) {
            if (n % i === 0) return false;
        }
        return n > 1;
    }

    /**
     * Get next prime after n.
     *
     * @param n
     * @return {*}
     */
    static nextPrime(n) {
        /* eslint-disable no-constant-condition */
        while (true) {
            n++;
            if (MathUtils.isPrime(n)) return n;
        }
    }

    /**
     * Get the nth triangular number.
     *
     * @param n
     * @return {number}
     */
    static triangular(n) {
        return (n / 2) * (n + 1);
    }

    /**
     * Get all factors of n.
     *
     * @param n
     * @return {Array}
     */
    static factors(n) {
        const r = [];
        for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i === 0) {
                r.push(i);
                if (n / i !== i) r.push(n / i);
            }
        }
        return r;
    }

    /**
     * Get proper divisors for n
     *
     * @param n
     * @return {Array}
     */
    static properDivisors(n) {
        const r = [];
        for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i === 0) {
                r.push(i);
                if (n / i !== i && n / i < n) r.push(n / i);
            }
        }
        return r;
    }

    /**
     * Get Collatz sequence for n.
     *
     * @param n
     * @param r
     * @return {Array}
     */
    static collatz(n, r = [n]) {
        if (n === 1) return r;
        if (n % 2 === 0) return MathUtils.collatz(n / 2, [...r, ...[n / 2]]);
        return MathUtils.collatz((3 * n) + 1, [...r, ...[(3 * n) + 1]]);
    }

}

export default MathUtils;
