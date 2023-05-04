/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    var ans = 0;
    var len = nums.length;
    for (var i = 0; i < len; ++i) {
        for (var j = i; j < len; ++j) {
            for (var k = j; k < len; ++k) {
                if (
                    nums[i] != nums[j] &&
                    nums[i] != nums[k] &&
                    nums[j] != nums[k]
                ) {
                    ans++;
                }
            }
        }
    }
    return ans;
};

var nums = [4, 4, 2, 4, 3];
nums = [1,1,1,1,1]
var ans = unequalTriplets(nums);

console.log(ans);
