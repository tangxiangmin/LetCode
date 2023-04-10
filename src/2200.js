/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */

var findKDistantIndices = function (nums, key, k) {
    var ans = [];
    for (var i = 0; i < nums.length; ++i) {
        if (key !== nums[i]) continue;
        for (var j = 0; j < nums.length; ++j) {
            if (Math.abs(j - i) > k) continue;
            if (!ans.includes(j)) {
                ans.push(j);
            }
        }
    }
    return ans.sort((a, b) => a - b);
};

var nums = [3, 4, 9, 1, 3, 9, 5],
    key = 9,
    k = 1;

var ans = findKDistantIndices(nums, key, k);
console.log(ans);
