/**
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below,
 * the maximum total from top to bottom is 23.
 *
 *                         3
 *                        7 4
 *                       2 4 6
 *                      8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom of the triangle below:
 *
 *                        75
 *                       95 64
 *                      17 47 82
 *                     18 35 87 10
 *                    20 04 82 47 65
 *                   19 01 23 75 03 34
 *                  88 02 77 73 07 63 67
 *                 99 65 04 28 06 16 70 92
 *                41 41 26 56 83 40 80 70 33
 *               41 48 72 33 47 32 37 16 94 29
 *              53 71 44 65 25 43 91 52 97 51 14
 *             70 11 33 28 77 73 17 78 39 68 17 57
 *            91 71 52 38 17 14 91 43 58 50 27 29 48
 *           63 66 04 68 89 53 67 30 73 16 69 87 40 31
 *          04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 *
 * NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route.
 * However, Problem 67, is the same challenge with a triangle containing one-hundred rows;
 * it cannot be solved by brute force, and requires a clever method! ;o)
 */

const lineToNumArray = line => line.split(' ').map(v => parseInt(v, 10));

const triangle = [];
triangle.push(lineToNumArray('75'));
triangle.push(lineToNumArray('95 64'));
triangle.push(lineToNumArray('17 47 82'));
triangle.push(lineToNumArray('18 35 87 10'));
triangle.push(lineToNumArray('20 04 82 47 65'));
triangle.push(lineToNumArray('19 01 23 75 03 34'));
triangle.push(lineToNumArray('88 02 77 73 07 63 67'));
triangle.push(lineToNumArray('99 65 04 28 06 16 70 92'));
triangle.push(lineToNumArray('41 41 26 56 83 40 80 70 33'));
triangle.push(lineToNumArray('41 48 72 33 47 32 37 16 94 29'));
triangle.push(lineToNumArray('53 71 44 65 25 43 91 52 97 51 14'));
triangle.push(lineToNumArray('70 11 33 28 77 73 17 78 39 68 17 57'));
triangle.push(lineToNumArray('91 71 52 38 17 14 91 43 58 50 27 29 48'));
triangle.push(lineToNumArray('63 66 04 68 89 53 67 30 73 16 69 87 40 31'));
triangle.push(lineToNumArray('04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'));

const triangleMaxTotal = () => {
    for (let i = triangle.length - 2; i >= 0; i--) {
        const tmp = [];
        const current = triangle[i];
        const before = triangle[i + 1];
        for (let y = 0; y < current.length; y++) {
            const val = current[y];
            const a = before[y];
            const b = before[y + 1];
            tmp.push(val + Math.max(a, b));
        }
        triangle[i] = tmp;
    }
    return triangle[0][0];
};

console.log(triangleMaxTotal());
