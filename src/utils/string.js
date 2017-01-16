/**
 * String utilities for Project Euler problem
 */

class StringUtils {

    /**
     * Check if string is a palindrome.
     *
     * @param string
     * @return {boolean}
     */
    static isPalindrome(string) {
        return String(string) === String(string).split('').reverse().join('');
    }
}

export default StringUtils;
