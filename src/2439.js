/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分最大值的范围，依次判断
var minimizeArrayValue = function (nums) {
    let l = 0
    let r = Math.max(...nums)

    while (l <= r) {
        const mid = (l + r) >> 1
        if (check(mid)) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l

    function check(limit) {
        var extra = 0;
        for (var i = nums.length - 1; i > 0; i--) {
            extra = Math.max(nums[i] + extra - limit, 0);
        }
        return nums[0] + extra <= limit;

    }
}


var nums = [3, 7, 1, 6]
var ans = minimizeArrayValue(nums)
console.log(ans)