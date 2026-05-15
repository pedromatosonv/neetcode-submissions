class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        // Time: O(n), because we visit each item once
        // Space: O(1), because we store only res and cnt

        let res = 0,
            cnt = 0;

        for (const num of nums) {
            if (num === 1) {
                cnt++;
                res = Math.max(cnt, res);
            } else {
                cnt = 0;
            }
        }

        return res;
    }
}
