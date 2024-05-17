
/**
 * @param {number[]} nums
 * @return {number}
 */

// BF，最后几个测试会超时
var minimumIndex = function (nums) {
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        const l = find(0, i)
        const r = find(i + 1, n - 1)
        if (l === r) return i
    }
    return -1

    function find(l, r) {
        const map = { '-1': 0 }
        let max = -1
        for (let i = l; i <= r; ++i) {
            const v = nums[i]
            if (!map[v]) map[v] = 0
            map[v]++
            if (map[max] < map[v]) {
                max = v
            }
        }
        if (map[max] * 2 <= r - l + 1) {
            return -1
        }
        return max
    }
};
// 思路，只要最大的数字超过数组长度的一半，就可以返回该数字，这个优化还是会超时
var minimumIndex = function (nums) {
    const n = nums.length
    const map = {}
    for (let i = 0; i < n; ++i) {
        const v = nums[i]
        if (!map[v]) map[v] = 0
        map[v]++
        if (map[v] > (i + 1) / 2) {
            if (v === find(i + 1, n - 1)) {
                return i
            }
        }
    }
    return -1

    function find(l, r) {
        const map = {}
        for (let i = l; i <= r; ++i) {
            const v = nums[i]
            if (!map[v]) map[v] = 0
            map[v]++
            if (map[v] > (r - l + 1) / 2) {
                return v

            }
        }
    }
}
//主要是每次循环都需要重新判断右边，对于某个元素而言，右边的次数就为总的次数减去左边的次数
var minimumIndex = function (nums) {
    const n = nums.length
    const total = {}
    for (const num of nums) {
        if (!total[num]) total[num] = 0
        total[num]++
    }

    const map = {}
    for (let i = 0; i < n; ++i) {
        const v = nums[i]
        if (!map[v]) map[v] = 0
        map[v]++
        if (map[v] * 2 > (i + 1) && (total[v] - map[v]) * 2 > (n - i - 1)) {
            return i
        }
    }
    return -1
}
var nums = [1, 2, 2, 2]
var ans = minimumIndex(nums)
console.log(ans)
