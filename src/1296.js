/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 模拟，排序后从头开始遍历，看看能否找到合适的数字
var isPossibleDivide = function (nums, k) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    let cnt
    const used = new Array(n).fill(0)
    for (let i = 0; i < n; ++i) {
        if (used[i]) continue
        used[i] = 1
        let val = nums[i] + 1
        let r = i + 1
        cnt = 1
        while (r < n && cnt < k) {
            if (used[r] || nums[r] < val) {
                r++
                continue
            }
            if (nums[r] > val) {
                return false
            }
            used[r] = 1
            val++
            r++
            cnt++
        }
    }

    return cnt === k
};

// 改成map
var isPossibleDivide = function (nums, k) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    if (n % k !== 0) return false

    const map = {}
    for (const num of nums) {
        if (!map[num]) map[num] = 0
        map[num]++
    }
    let round = n / k
    let min = nums[0]

    let i = 0
    while (round > 0) {
        let cur = min
        let findMin = false
        for (let i = 0; i < k; ++i) {
            if (!map[cur]) {
                return false
            }
            map[cur]--
            if (map[cur] > 0 && !findMin) {
                min = cur
                findMin = true
            }
            cur++
        }

        if (!findMin) {
            while (i < n) {
                if (map[nums[i]] > 0) {
                    break
                }
                ++i
            }
            min = nums[i]
        }
        round--
    }
    return true
}

var nums = [1, 2, 3, 3, 4, 4, 5, 6], k = 4
nums = [3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], k = 3
// nums = [1, 2, 3, 4], k = 3
// nums = [16, 21, 26, 35], k = 4
var ans = isPossibleDivide(nums, k)
console.log(ans)