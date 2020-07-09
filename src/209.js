/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// 思路1：BF
var minSubArrayLen = function (s, nums) {
    var minLen = Infinity;
    for (var i = 0; i < nums.length; ++i) {
        var sum = nums[i];
        var j = i + 1;
        for (; j < nums.length; ++j) {
            if (sum < s) {
                sum += nums[j];
            } else {
                break;
            }
        }
        if (sum >= s) {
            if (minLen > j - i) {
                minLen = j - i;
            }
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

// 思路2，在BF算法中进行了很多重复的求和计算，可以使用快慢指针
// [2, 3, 1, 2, 4, 3] -> 从开始找到和大于s的连续子数组，即[2,3,1,2]，其和为8，同时记录长度为4
// 然后向右移动一位，其和肯定大于s，此时再移除最左侧元素，此时子数组为[3, 1, 2, 4]，其和为10，其长度为4，
// 继续移除最左侧元素，此时子数组为[1, 2, 4]，其和为7，满足题意，保存最小长度3
// 依次类推，当子数组之和大于等于s时抛弃最左侧元素，小于则向右添加一位
var minSubArrayLen = function (s, nums) {
    var minLen = Infinity;
    var sum = 0;
    var l = 0; // 记录最左侧元素
    for (var i = 0; i < nums.length; ++i) {
        sum += nums[i];
        while (sum >= s) {
            if (minLen > i - l + 1) {
                minLen = i - l + 1;
            }
            sum -= nums[l]
            l++
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

var s = 7,
    nums = [2, 3, 1, 2, 4, 3];
var res = minSubArrayLen(s, nums);
console.log(res);
