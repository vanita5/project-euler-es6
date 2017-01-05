/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 * there are exactly 6 routes to the bottom right corner.
 *
 *
 * How many such routes are there through a 20×20 grid?
 */

/**
 * The recursive approach seems to be correct for smaller grids,
 * however it scales really bad. Like, really really bad.
 *
 * @param n
 * @param x
 * @param y
 * @returns {number}
 */
const routes = (n, x = 0, y = 0) => {
    let p = 0;
    if (x === n && y === n) return 1;
    if (x < n) p += routes(n, x + 1, y);
    if (y < n) p += routes(n, x, y + 1);
    return p;
};

/**
 * ¯\_(ツ)_/¯
 * https://en.wikipedia.org/wiki/Binomial_coefficient
 *
 * @param n
 * @returns {number}
 */
const routes2 = n => {
    let p = 1;
    for (let i = 0; i < n; i++) {
        p = (p * ((2 * n) - i)) / (i + 1);
    }
    return p;
};

console.log(routes2(20));
