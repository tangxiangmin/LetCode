/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {

    const map = new Array(k + 1).fill(0)
    let ans = 0
    while (nums.length) {
        const num = nums.pop()
        ans++
        if (num <= k) {
            map[num] = 1
            let filled = true
            for (let i = 1; i < map.length; ++i) {
                if (map[i] === 0) {
                    filled = false
                    break
                }
            }
            if (filled) {
                return ans
            }
        }
    }
    return -1
};