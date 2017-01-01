/**
 * The sum of the squares of the first ten natural numbers is,
 *
 *      12 + 22 + ... + 102 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 *      (1 + 2 + ... + 10)2 = 552 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers
 * and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers
 * and the square of the sum.
 */

/* Array containing the first n natural numbers */
const natNums = n => Array.from(Array(n + 1).keys()).slice(1);

/* sum of the squares of the first 100 natural numbers */
const sosq = () => natNums(100).reduce((a, b) => a + Math.pow(b, 2), 0);

/* square of the sum of the first 100 natural numbers */
const sqos = () => Math.pow(natNums(100).reduce((a, b) => a + b, 0), 2);

console.log(`Result: ${sqos() - sosq()}`);
