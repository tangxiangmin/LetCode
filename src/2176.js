/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    var len = nums.length;
    var ans = 0;

    for (var i = 0; i < len - 1; ++i) {
        for (var j = i + 1; j < len; ++j) {
            if (nums[i] === nums[j] && (i * j) % k === 0) {
                ans++;
            }
        }
    }
    return ans
};

var nums = [3, 1, 2, 2, 2, 1, 3],
    k = 2;

var ans = countPairs(nums, k);

console.log(ans);
