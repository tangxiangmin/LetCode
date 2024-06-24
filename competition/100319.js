
/**
 * @param {number[]} rewardValues
 * @return {number}
 */
// 01背包 动态规划
var maxTotalReward = function (rewardValues) {
    const n = rewardValues.length
    rewardValues.sort((a, b) => a - b)

    const cache = new Map()

    return dfs(0, 0)

    function dfs(i, x) {
        if (i >= n) return 0

        if (rewardValues[i] <= x) return 0

        const key = `${i},${x}`
        if (cache.has(key)) {
            return cache.get(key)
        }

        let a = findR(rewardValues, rewardValues[i])
        let b = findR(rewardValues, rewardValues[i] + x)
        const ans = Math.max(dfs(a, x), rewardValues[i] + dfs(b, x + rewardValues[i]))
        return ans
    }

    function findR(nums, target) {
        const n = nums.length
        let l = 0
        let r = n - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            const val = nums[mid]
            if (val <= target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return l
    }
};

var rewardValues = [1, 1, 3, 3]
rewardValues = [1, 2, 3, 4, 6]
// rewardValues = [1, 1, 1, 1, 1]
// rewardValues = [2, 14, 15, 18]
rewardValues = [49999, 50000]


var ans = maxTotalReward(rewardValues)
console.log(ans)