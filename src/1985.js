/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {

    nums.sort((a, b) => {
        const la = a.length
        const lb = b.length
        if (la > lb) return -1
        if (la < lb) return 1
        if (a > b) return -1
        return 1
    })
    return nums[k - 1]
};
var nums = ["3","6","7","10"], k = 4
var ans = kthLargestNumber(nums, k)
console.log(ans)