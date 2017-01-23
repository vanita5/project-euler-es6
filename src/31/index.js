/**
 * In England the currency is made up of pound, £, and pence, p,
 * and there are eight coins in general circulation:
 *
 *      1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 *
 * It is possible to make £2 in the following way:
 *
 *      1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 *
 * How many different ways can £2 be made using any number of coins?
 */

const total = 200;

const coins = [1, 2, 5, 10, 20, 50, 100, 200];

/**
 * Implements the dynamic programming algorithm
 * from <http://www.algorithmist.com/index.php/Coin_Change>
 *
 * @param n
 * @param m
 * @return {*}
 */
const ways = (n, m) => {
    const ws = [];
    for (let i = 0; i < n + 1; i++) {
        ws[i] = [];
        for (let j = 0; j < m; j++) {
            if (i === 0) {
                ws[i][j] = 1;
            } else if (j === 0) {
                if (i % coins[j] === 0) {
                    ws[i][j] = 1;
                } else {
                    ws[i][j] = 0;
                }
            } else if (coins[j] > i) {
                ws[i][j] = ws[i][j - 1];
            } else {
                ws[i][j] = ws[i - coins[j]][j] + ws[i][j - 1];
            }
        }
    }
    return ws[n][m - 1];
};

console.log(ways(total, coins.length));
