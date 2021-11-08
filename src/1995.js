/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    var len = nums.length;
    var ans = 0;
    for (var a = 0; a < len - 3; ++a) {
        for (var b = a + 1; b < len - 2; ++b) {
            for (var c = b + 1; c < len - 1; ++c) {
                for (var d = c + 1; d < len; ++d) {
                    if (nums[a] + nums[b] + nums[c] === nums[d]) {
                        ans++;
                    }
                }
            }
        }
    }
    return ans;
};


var nums = [1,2,3,6]
nums = [1,1,1,3,5]
var ans = countQuadruplets(nums)
console.log(ans)