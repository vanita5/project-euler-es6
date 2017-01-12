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
 * NOTE: There's a bug somewhere and it's messy af
 */

import bigdecimal from 'bigdecimal';

/**
 * Let's assume that for d < 1000 the longest
 * recurring cycle has less than 10000 digits and
 * the longest terminating decimal fraction has also less than 10000 digits.
 *
 * @type {number}
 */
const PRECISION = 10000;

const decimalUnitFraction = d => {
    const n = new bigdecimal.BigDecimal(1);
    d = new bigdecimal.BigDecimal(d);
    return n
        .divide(d, PRECISION, new bigdecimal.RoundingMode.FLOOR())
        .stripTrailingZeros()
        .toString()
        .substring(2);
};

const cycleLength = string => {
    /* eslint-disable max-depth */

    let cycleLength = 0;
    let _tmp = '';
    let breakOuter = false;
    console.log(string);
    for (let i = 0; i < string.length && !breakOuter; i++) {
        const char = string.charAt(i);

        for (let y = i + 1; y < string.length; y++) {
            if (string.charAt(y) === char) {
                const testString = string.substring(i, y);
                const compareString = string.substring(y, testString.length + 1);

                if (testString.length === 982) {
                    breakOuter = true;
                    break;
                }
                if (testString === compareString) {
                    if (testString.length > cycleLength) {
                        if (_tmp.length > 0 && testString.substring(0, testString.length / 2) === _tmp) {
                            // double the cycle, break!
                            breakOuter = true;
                            break;
                        }
                        cycleLength = testString.length;
                        _tmp = testString;
                    }
                    break;
                }
            }
        }
    }
    return cycleLength;
};

const recurringCycle = d => {
    const cycle = decimalUnitFraction(d);
    if (cycle.length < PRECISION) { // we definitely got a non-recurring, terminating decimal
        return false;
    }
    return cycleLength(cycle);
};

console.log(recurringCycle(7));
