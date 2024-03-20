/**
 * @param {number[]} nums
 * @return {number}
 */
// 直接排序O(n)
var findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    for (const num of nums) {
        if (num !== min && num !== max) {
            return num
        }
    }
    return -1
};
// 大佬的做法O(1)：由于数组元素各不相同，所以答案一定在前三个数中，不妨取前三个数的中间值。

var findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1
    const [a, b, c] = nums
    const arr = [a, b, c]
    arr.sort((a, b) => a - b)
    return arr[1]
}

var nums = [3, 2, 1, 4]
var ans = findNonMinOrMax(nums)
console.log(ans)