/**
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 *
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 *
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
 * therefore d(220) = 284.
 *
 * The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 */

const properDivisors = n => {
    const divisors = [];
    for (let i = 1; i < Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (n / i !== i && n / i < n) divisors.push(n / i);
        }
    }
    return divisors;
};

const d = n => properDivisors(n).reduce((a, b) => a + b, 0);

const sumOfAmbicleNumbers = () => {
    const ambicles = [];
    for (let a = 0; a < 10000; a++) {
        const b = d(a);
        if (a !== b && d(b) === a) ambicles.push(a);
    }
    return ambicles.reduce((a, b) => a + b, 0);
};

console.log(sumOfAmbicleNumbers());
