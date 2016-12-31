/**
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const isPalindrome = n => String(n) === String(n).split('').reverse().join('');

let lpal = 0;
for (let i = 100; i < 1000; i++) {
    for (let y = 100; y < 1000; y++) {
        if (isPalindrome(i * y)) {
            lpal = i * y > lpal ? i * y : lpal;
        }
    }
}

console.log(`Result: ${lpal}`);
