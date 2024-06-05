/**
 * @param {number[]} nums
 * @return {number[]}
 */
// BF
var resultArray = function (nums) {
    const arr1 = [nums[0]]
    const arr2 = [nums[1]]
    const n = nums.length

    for (let i = 2; i < n; ++i) {
        const val = nums[i]
        const a = greaterCount(arr1, val)
        const b = greaterCount(arr2, val)
        if (a > b) {
            arr1.push(val)
        } else if (a < b) {
            arr2.push(val)
        } else {
            if (arr1.length <= arr2.length) {
                arr1.push(val)
            } else {
                arr2.push(val)
            }
        }
    }
    return arr1.concat(arr2)

    function greaterCount(arr, val) {
        let ans = 0
        for (const num of arr) {
            if (num > val) {
                ans++
            }
        }
        return ans
    }
};
var nums = [2, 1, 3, 3]
nums = [5, 14, 3, 1, 2]
var ans = resultArray(nums)
console.log(ans)