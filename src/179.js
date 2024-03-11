/**
 * @param {number[]} nums
 * @return {string}
 */
// 对每个元素按字母序排序
var largestNumber = function (nums) {
    nums.sort((x, y) => {
        let sx = 10, sy = 10;
        while (sx <= x) {
            sx *= 10;
        }
        while (sy <= y) {
            sy *= 10;
        }
        return '' + (sx * y + x) - ('' + (sy * x + y));
    })
    if (nums[0] === 0) {
        return '0';
    }
    return nums.join('')
};
var nums = [10, 2]
nums = [3, 30, 34, 5, 9]
var ans = largestNumber(nums)
console.log(ans)