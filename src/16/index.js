/**
 * 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 21000?
 */

/**
 * Let's just cheat here for now and use bigint library
 */
import bignum from 'bignum';

const problem16 = () => bignum(2).pow(1000).toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);

console.log(problem16());
