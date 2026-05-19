class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans = [];

        for (let i = 0; i <= 1; i++) {
            let startingIndex = nums.length * i;            
            for (let j = 0; j < nums.length; j++) {
                ans[startingIndex + j] = nums[j];
            }
        }

        return ans;
    }
}
