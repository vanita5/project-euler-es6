/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 * there are exactly 6 routes to the bottom right corner.
 *
 *
 * How many such routes are there through a 20×20 grid?
 */

const routes = (n, x = 0, y = 0) => {
    let p = 0;
    if (x === n && y === n) return 1;
    if (x < n) p += routes(n, x + 1, y);
    if (y < n) p += routes(n, x, y + 1);
    return p;
};

console.log(routes(20));
