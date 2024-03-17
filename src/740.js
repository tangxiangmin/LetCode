/**
 * @param {number[]} nums
 * @return {number}
 */
// 失败的回溯解法
var deleteAndEarn = function (nums) {
    var map = nums.reduce((acc, num) => {
        if (!acc[num]) acc[num] = 0
        acc[num]++
        return acc
    }, {})

    function dfs() {
        const keys = Object.keys(map).filter(key => {
            return map[key] > 0
        })

        if (!keys.length) return 0

        let max = 0
        for (let i = 0; i < keys.length; ++i) {
            const num = +keys[i]
            let sum = 0
            let val = map[num]
            sum += val * num
            if (map[num - 1] > 0) {
                map[num - 1] -= val
            }
            if (map[num + 1] > 0) {
                map[num + 1] -= val
            }

            map[num] = 0

            sum += dfs(map)

            map[num] = val
            if (map[num - 1] !== undefined) {
                map[num - 1] += val
            }
            if (map[num + 1] !== undefined) {
                map[num + 1] += val
            }

            if (max < sum) {
                max = sum
            }
        }
        return max
    }
    return dfs(map)
};

// 将x+1和x-1看做是索引值，这个题就跟打家劫舍一样了：不能选择相邻的元素
var deleteAndEarn = function (nums) {
    let maxVal = Math.max(...nums)
    const sum = new Array(maxVal + 1).fill(0);
    for (const val of nums) {
        sum[val] += val;
    }
    return rob(sum);
    function rob(nums) {
        const size = nums.length;
        let dp = new Array(size + 2).fill(0)
        for (let i = 0; i < size; i++) {
            dp[i + 2] = Math.max(dp[i + 1], dp[i] + nums[i])
        }
        return dp[size + 1];
    }
};



var nums = [3, 4, 2]
// nums = [2, 2, 3, 3, 3, 4]
// nums = [1, 1, 1, 2, 4, 5, 5, 5, 6]
var ans = deleteAndEarn(nums)
console.log(ans)