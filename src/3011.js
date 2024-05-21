/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 滑动窗口，每个窗口包含bit 1相同的数字，窗口内的数字肯定是可以任意排序的，因此就认为他们是有序的，这个窗口内的最大值一定是小于右侧的最小值，这样才能使升序的
var canSortArray = function (nums) {
    const n = nums.length
    let l = 0
    let r = 0
    let prevMax = 0
    while (r < n) {
        let v = caclBit1(nums[l])
        let max = nums[l]
        while (v === caclBit1(nums[r])) {

            if (nums[r] < prevMax) return false
            max = Math.max(nums[r], max)
            r++
        }
        prevMax = max
        l = r
        if (nums[l] < prevMax) {
            return false
        }
        r++
    }
    return true

    function caclBit1(n) {
        let count = 0
        while (n !== 0) {
            count += n & 1
            n >>= 1
        }
        return count
    }

};

var nums = [20, 16]
nums = [2, 28, 9]


var ans = canSortArray(nums)
console.log(ans)