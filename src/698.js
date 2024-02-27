/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 思路，这道题跟那个火柴组成正方形的题拆不多，k就是边的数量，使用回溯
var canPartitionKSubsets = function (nums, k) {
    var sum = nums.reduce((acc, row) => acc + row, 0)
    if (sum % k !== 0) return false

    var len = sum / k
    var edges = Array(k).fill(0)

    nums.sort((a, b) => b - a) // 让较大的值排在前面，这样更容易剪枝 edges[i] <= len
    if (nums[0] > len) {
        return false // 所有元素都应该小于等于len
    }
    function backtrack(index) {
        if (index === nums.length) {
            return true
        }
        for (var i = 0; i < k; ++i) {
            if (i > 0 && edges[i] == edges[i - 1]) continue; // 这个剪枝优化非常重要，可以避免超时，原理是两个桶的结果相同，选择前面那个和选择当前这个是一样的，可以跳过
            edges[i] += nums[index]
            if (edges[i] <= len && backtrack(index + 1)) {
                return true
            }
            edges[i] -= nums[index]

        }
        return false
    }
    return backtrack(0)
};

var nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// nums = [1, 2, 3, 4], k = 3
nums = [2240, 3029, 520, 203, 1908, 505, 2600, 739, 696, 345, 1197, 76, 394, 2902, 1276]
k = 6
nums = [10, 5, 5, 4, 3, 6, 6, 7, 6, 8, 6, 3, 4, 5, 3, 7], k = 8
var ans = canPartitionKSubsets(nums, k)
console.log(ans)