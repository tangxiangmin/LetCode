/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
    const n = nums.length
    const arr1 = [nums[0]]
    const arr2 = [nums[1]]
    for (let i = 2; i < n; ++i) {
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1.push(nums[i])
        } else {
            arr2.push(nums[i])
        }
    }
    return arr1.concat(arr2)
};