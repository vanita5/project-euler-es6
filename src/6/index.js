/**
 * The sum of the squares of the first ten natural numbers is,
 *
 *      1² + 2² + ... + 10² = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 *      (1 + 2 + ... + 10)² = 552 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers
 * and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers
 * and the square of the sum.
 */

import MathUtils from '../utils/math';

/* sum of the squares of the first 100 natural numbers */
const sosq = () => MathUtils.naturals(100).reduce((a, b) => a + Math.pow(b, 2), 0);

/* square of the sum of the first 100 natural numbers */
const sqos = () => Math.pow(MathUtils.naturals(100).reduce((a, b) => a + b, 0), 2);

console.log(`Result: ${sqos() - sosq()}`);
