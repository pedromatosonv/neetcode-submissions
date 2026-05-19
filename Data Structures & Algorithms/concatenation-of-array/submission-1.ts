class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans = Array.from(nums);
        const n = nums.length;

        for (let i = 0; i < nums.length; i++) {
            ans[i + n] = nums[i];
        }

        return ans;
    }
}
