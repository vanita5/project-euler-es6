/**
 * Array utilities for Project Euler problems
 */

class ArrayUtils {

    /**
     * Create a two dimensional array filled with zeros
     *
     * @param width
     * @param height
     * @param def
     * @return {Array}
     */
    static create2DArray(width, height, def = undefined) {
        return Array(height).fill().map(() => Array(width).fill(def));
    }

    /**
     * Check if array contains bignum.
     * Array.prototype.includes() fails.
     *
     * Compare string representation as it is faster.
     *
     * @param arr
     * @param bignum
     * @return {boolean}
     */
    static bignumArrayContains(arr, bignum) {
        const compareString = bignum.toString();
        for (const b of arr) {
            if (compareString === b.toString()) return true;
        }
        return false;
    }
}

export default ArrayUtils;
