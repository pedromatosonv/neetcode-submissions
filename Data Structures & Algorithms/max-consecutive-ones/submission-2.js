class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        // Time complexity: O(n), because we visit each items.
        // Space complexity: O(1), because we only use max and cnt,
        // regardless of the input size.

        let max = 0;
        let cnt = 0;

        for (const num of nums) {
            if (num === 1) {
                cnt++
                max = Math.max(cnt, max)
            } else {
                cnt = 0;
            }
        }

        return max;
    }
}
