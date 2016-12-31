/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

console.log(`Result: ${largestPrimeFactor(600851475143)}`);

/**
 * Get largest prime factor
 *
 * @param n
 * @returns {*}
 */
function largestPrimeFactor(n) {
    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            n /= i;
        } else {
            i++;
        }
    }
    return i;
}
