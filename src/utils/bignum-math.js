/**
 * Bignum math utilities for Project Euler problems
 */

class BignumMathUtils {

    /**
     * Get factorial for bignum(n).
     *
     * @param n bignum
     * @return {number}
     */
    static factorial(n) {
        if (n.eq(1)) return n;
        return n.mul(BignumMathUtils.factorial(n.sub(1)));
    }
}

export default BignumMathUtils;
