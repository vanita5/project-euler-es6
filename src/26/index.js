/**
 * A unit fraction contains 1 in the numerator.
 * The decimal representation of the unit fractions with denominators 2 to 10 are given:
 *
 * 1/2   =   0.5
 * 1/3   =   0.(3)
 * 1/4   =   0.25
 * 1/5   =   0.2
 * 1/6   =   0.1(6)
 * 1/7   =   0.(142857)
 * 1/8   =   0.125
 * 1/9   =   0.(1)
 * 1/10  =   0.1
 *
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.
 *
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 *
 * NOTE: This is the second attempt (see attempt1.js)
 *
 * Let's try to solve this with long divison.
 */

const cycleLength = divisor => {
    let currentDigit = -1;
    let currentRemainder = 0;

    const fractions = [];
    const remainders = [0];
    const dividents = [1];

    for (let i = 0; i < 99999; i++) {
        if (i < dividents.length) {
            currentDigit = dividents[i];
        } else {
            currentDigit = 0;
            dividents.push(0);
        }

        if (i > 0) { // skip the 0 before the decimal point
            fractions.push(Math.floor((currentDigit + (currentRemainder * 10)) / divisor));
        }

        currentRemainder = (currentDigit + (currentRemainder * 10)) % divisor;

        if (remainders.includes(currentRemainder)) break;
        remainders.push(currentRemainder);
    }
    return fractions.length;
};

const longestRecurringCycle = () => {
    let l = 0;
    let r = 0;
    for (let d = 0; d < 1000; d++) {
        const length = cycleLength(d);
        if (length > l) {
            l = length;
            r = d;
        }
    }
    return r;
};

console.log(longestRecurringCycle());
