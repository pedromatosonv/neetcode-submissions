class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // Time complexity: O(n), because each item is visited once.
        // Space complexity: O(1), because memory usage does not scale with input size.
        let k = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
