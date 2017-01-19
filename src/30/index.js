/**
 * Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
 *
 *      1634 = 1^4 + 6^4 + 3^4 + 4^4
 *      8208 = 8^4 + 2^4 + 0^4 + 8^4
 *      9474 = 9^4 + 4^4 + 7^4 + 4^4
 *
 * As 1 = 1^4 is not a sum it is not included.
 *
 * The sum of these numbers is 1634 + 8208 + 9474 = 19316.
 *
 * Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
 */

const upperBound = pow => {
    const max = Math.pow(9, pow);
    let l;
    let bound = max;
    do {
        l = bound.toString().length;
        bound = l * max;
    } while (l < bound.toString().length);
    return bound;
};

const calculateTotal = (n, pow) => {
    let total = 0;
    for (const sn of n.toString()) {
        total += Math.pow(parseInt(sn, 10), pow);
    }
    return total;
};

const sum = pow => {
    let sum = 0;
    for (let i = 2; i < upperBound(pow); i++) {
        const total = calculateTotal(i, pow);
        if (total === i) sum += i;
    }
    return sum;
};

console.log(sum(5));
