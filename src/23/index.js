/**
 * A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
 *
 * For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
 * which means that 28 is a perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors
 * is less than n and it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number,
 * 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.
 *
 * By mathematical analysis, it can be shown that all integers greater than 28123 can be written
 * as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis
 * even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers
 * is less than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

const LIMIT = 28123;

const properDivisors = n => {
    const divisors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (n / i !== i && n / i < n) divisors.push(n / i);
        }
    }
    return divisors;
};

const abundant = n => properDivisors(n).reduce((a, b) => a + b) > n;

const sumsOfAbundants = () => {
    const abundants = [];
    for (let i = 12; i < LIMIT; i++) {
        if (abundant(i)) abundants.push(i);
    }

    const possible = new Array(LIMIT + 1).fill(false);
    for (let i = 0; i < abundants.length; i++) {
        for (let y = 0; y < abundants.length; y++) {
            if (abundants[i] + abundants[y] <= LIMIT) {
                possible[abundants[i] + abundants[y]] = true;
            } else {
                break;
            }
        }
    }

    return possible;
};

const sum = () => {
    let sum = 0;
    const isSumOfAbundants = sumsOfAbundants();
    for (let i = 1; i <= LIMIT; i++) {
        if (!isSumOfAbundants[i]) sum += i;
    }
    return sum;
};

console.log(sum());
