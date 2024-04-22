/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
// BF


// 二分
var smallestDivisor = function (nums, threshold) {
    var l = 1, r = 1000000;

    while (l <= r) {
        var mid = l + ((r - l) >> 1);
        if (cal(mid) <= threshold) {
            r = mid - 1;
        }
        else l = mid + 1;
    }

    return l;

    function cal(divided) {
        var res = 0;
        for (var i = 0; i < nums.length; ++i) {
            res += Math.ceil(1.0 * nums[i] / divided);
        }
        return res;
    }
};
var nums = [1, 2, 5, 9], threshold = 6
// nums = [2, 3, 5, 7, 11], threshold = 11 // 3
// [1,11] -> mid 6->[1,2]
// [1,5] -> mid 3 ->[1,3]
var ans = smallestDivisor(nums, threshold)

console.log(ans)