class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // Time complexity: O(n), because we only visit each item once.
        // Space complecity: O(1), because memory size does not scale with input size.
        let max = -1;
        for (let i = arr.length - 1; i >= 0; i--) {
            let newMax = Math.max(max, arr[i]);
            arr[i] = max
            max = newMax;
        }
        return arr;
    }
}
