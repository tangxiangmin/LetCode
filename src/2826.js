/**
 * @param {number[]} nums
 * @return {number}
 */
// 枚举目标数组开头的数字，这样可以统计删除的个数，取最小值
var minimumOperations = function (nums) {
    const g = []
    for (const num of nums) {
        var j = findR(num)
        if (j === g.length - 1) {
            g.push(num)
        } else {
            g[j] = num
        }
    }

    return nums.length - g.length
    function findR(target) {
        let l = 0
        let r = g.length - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (g[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return r
    }
};

var nums = [2, 1, 3, 2, 1]
// nums = [1, 3, 2, 1, 3, 3]
nums = [3, 1, 2]
var ans = minimumOperations(nums)
console.log(ans)