/**
 * Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 *
 *              _21  22   23   24   _25
 *              20    _7   8    _9  10
 *              19    6    _1   2   11
 *              18    _5   4    _3  12
 *              _17  16   15   14   _13
 *
 * It can be verified that the sum of the numbers on the diagonals is 101.
 *
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

import ArrayUtils from '../utils/array';

const ARRAY_LENGTH = 1001;

const center = length => Math.floor(length / 2);

/* eslint-disable complexity */
const diagonals = () => {
    const arr = ArrayUtils.create2DArray(ARRAY_LENGTH, ARRAY_LENGTH, 0);

    let sum = 0;
    let val = 1;
    let step = 1;
    let x = center(ARRAY_LENGTH);
    let y = center(ARRAY_LENGTH);
    let last = false;

    // add center
    sum = val;
    arr[y][x] = val;

    // add first step, which is the only one where
    // the last movement doesn't count as a diagonal
    x++;
    arr[y][x] = ++val;

    /* eslint-disable no-constant-condition */
    do {
        // 1. move down until move step is reached, if possible
        if (y + step >= ARRAY_LENGTH) {
            if (arr[y + 1][x] === 0) last = true;
            else break;
        }
        for (let i = 0; i < step; i++) {
            if (last && i >= step - 1) break;
            y++;
            arr[y][x] = ++val;
            if (i === step - 1) sum += val;
        }

        // 2. increase move step
        step++;

        // 3. move left until move step is reached, if possible
        if (x - step < 0) {
            if (arr[y][x - 1] === 0) last = true;
            else break;
        }
        for (let i = 0; i < step; i++) {
            if (last && i >= step - 1) break;
            x--;
            arr[y][x] = ++val;

            if (i === step - 1) sum += val;
        }

        // 4. move up until move step is reached, if possible
        if (y - step < 0) {
            if (arr[y - 1][x] === 0) last = true;
            else break;
        }
        for (let i = 0; i < step; i++) {
            if (last && i >= step - 1) break;
            y--;
            arr[y][x] = ++val;

            if (i === step - 1) sum += val;
        }

        // 5. increase move step
        step++;

        // 6. move right until move step is reached, if possible
        if (x + step >= ARRAY_LENGTH) {
            if (arr[y][x + 1] === 0) last = true;
            else break;
        }
        for (let i = 0; i < step; i++) {
            if (last && i >= step - 1) break;
            x++;
            arr[y][x] = ++val;

            if (i === step - 2) { // here we need the prev value, as the right movement increases the spiral size
                sum += val;
            }
        }
    } while (true);

    return sum;
};

console.log(diagonals());
