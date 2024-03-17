/**
 * @param {number[]} nums
 * @return {number}
 */
// BF，大力出奇迹，肯定会超时
var tupleSameProduct = function (nums) {
    const n = nums.length
    let ans = 0
    let visited = {}
    for (i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            for (let k = 0; k < n; ++k) {
                for (let l = 0; l < n; ++l) {
                    const a = nums[i]
                    const b = nums[j]
                    const c = nums[k]
                    const d = nums[l]
                    if (a == b || a == c || a === d || b == c || b === d || c == d) continue
                    if (a * b === c * d) {
                        const key = [a, b, c, d].join(',')
                        if (!visited[key]) {
                            visited[key] = true
                            ans++
                        }
                    }
                }
            }
        }
    }
    return ans
};
// 统计每两个数相乘，使用哈希记录，某个乘积在哈希表里面的数值x大于1，则说明有对应的组合，数量为从x里面选取2个组合，组合数量为(x * (x-1))
var tupleSameProduct = function (nums) {
    const n = nums.length
    let map = {}
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            const val = nums[i] * nums[j]
            if (!map[val]) map[val] = 0
            map[val]++
        }
    }
    let ans = 0
    for (const val of Object.values(map)) {
        ans += val * (val - 1) * 4
    }
    return ans
}

var nums = [2, 3, 4, 6]
nums = [1, 2, 4, 5, 10]
var ans = tupleSameProduct(nums)
console.log(ans)