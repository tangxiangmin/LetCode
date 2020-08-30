/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路1： BF
var numIdenticalPairs = function (nums) {
    var ans = 0;
    for (var i = 0; i < nums.length - 1; ++i) {
        for (var j = i + 1; j < nums.length; ++j) {
            if (nums[i] === nums[j]) {
                ans++;
            }
        }
    }
    return ans;
};

// 思路2：评论区一种很简洁的解法，使用数组

var numIdenticalPairs = function (nums) {
    var ans = 0;
    var tmp = new Array(100).fill(0);
    for (var num of nums) {
        ans += tmp[num - 1];
        tmp[num - 1]++;
    }
    return ans
};
