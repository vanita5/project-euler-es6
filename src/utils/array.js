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
}

export default ArrayUtils;
