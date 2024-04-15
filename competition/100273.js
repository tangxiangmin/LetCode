/**
 * @param {number[]} nums
 * @return {number}
 */
// BF
var numberOfSubarrays = function (nums) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        let max = nums[i]
        for (let j = i; j < n; ++j) {
            if (nums[j] > max) break
            if (nums[j] === max) {
                ans++
            }
        }
    }
    return ans
};

// 滑动窗口
var numberOfSubarrays = function (nums) {
    const n = nums.length;
    let r = 0
    const queue = []
    ans = 0
    const map = {}
    while (r < n) {
        while (queue.length && queue[queue.length - 1] < nums[r]) {
            const d = queue[queue.length - 1]
            map[d]--
            queue.pop()
        }

        queue.push(nums[r])

        if (!map[nums[r]]) map[nums[r]] = 0
        map[nums[r]]++

        ans += map[nums[r]]
        r++
    }
    return ans

}

var nums = [1, 4, 3, 3, 2]
// nums = [3, 3, 3]
// nums = [1]
var ans = numberOfSubarrays(nums)
console.log(ans)