class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // Time complexity: O(n), because we only visit each item once.
        // Space complecity: O(1), because memory size does not scale with input size.
        let res = [];
        let max = 0;
        for (let i = arr.length - 2; i >= 0; i--) {
            max = Math.max(arr[i + 1], max);
            res[i] = max;
        }
        res[arr.length - 1] = - 1;
        return res;
    }
}
