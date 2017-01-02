/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 *                              a² + b² = c²
 *
 * For example, 3² + 4² = 9 + 16 = 25 = 5².
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

// const isPythagorean = arr => Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2);

const possibleTriplets = () => {
    for (let a = 1; a < 1000; a++) {
        for (let b = a + 1; b < 1000; b++) {
            const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            if (c % 1 === 0 && a + b + c === 1000) return [a, b, c];
        }
    }
};

console.log(`Result: ${possibleTriplets().reduce((a, b) => a * b, 1)}`);
