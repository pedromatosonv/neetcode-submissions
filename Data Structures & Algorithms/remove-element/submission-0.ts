class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // Time complexity: O(n^2)
        // Space complexity: O(1), because memory usage does not scale with input size.

        let k = nums.length;
        for (let i = 0; i < k; i++) {
            while (nums[i] === val) {
                k--;
                nums[i] = 100;
                for (let j = i; j < k; j++) {
                    nums[j] = nums[j + 1];
                }
            }
        }
        return k;
    }
}
