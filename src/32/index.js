/**
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once;
 * for example, the 5-digit number, 15234, is 1 through 5 pandigital.
 *
 * The product 7254 is unusual, as the identity, 39 × 186 = 7254,
 * containing multiplicand, multiplier, and product is 1 through 9 pandigital.
 *
 * Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
 *
 * HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 */

import MathUtils from '../utils/math';

const is9PandigitalProduct = (a, b) => {
    const string = `${a}${b}${a * b}`;
    if (string.length !== 9) return false;
    return MathUtils.isPandigital(string);
};

const pandigitalsSum = () => {
    const products = [];
    for (let a = 0; a <= 9876; a++) {
        for (let b = a; b <= 9876; b++) {
            if (`${a}${b}${a * b}`.length > 9) break;
            if (is9PandigitalProduct(a, b)) {
                if (!products.includes(a * b)) products.push(a * b);
            }
        }
    }
    return products.reduce((a, b) => a + b);
};

console.log(pandigitalsSum());
