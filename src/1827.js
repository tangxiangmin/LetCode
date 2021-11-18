/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：看起来找到数组中最大值的索引值，然后这个值后面的元素都要按照索引值依次大1，这个值前面的值可以用个递归来处理下
// 这个思路存在缺陷，对于用例[7,4,2,8,1,7,7,10]，会当做[7,4,2,8,1,7,7]处理，造成实际上少进行了一些操作
var minOperations = function (nums) {
    var len = nums.length;
    if (len <= 1) return 0;
    var maxIdx = 0;
    for (var i = 0; i < len; ++i) {
        if (nums[i] > nums[maxIdx]) {
            maxIdx = i;
        }
    }
    var ans = 0;
    for (var i = maxIdx + 1; i < len; ++i) {
        ans += nums[maxIdx] - nums[i] + i - maxIdx;
    }

    var prev = nums.slice(0, maxIdx);

    return minOperations(prev) + ans;
};

// 思路2 直接bf就行了
var minOperations = function (nums) {
    var len = nums.length;
    var ans = 0;
    for (var i = 1; i < len; ++i) {
        var prev = nums[i - 1];
        var cur = nums[i];
        if (prev >= cur) {
            ans += prev + 1 - cur;
            nums[i] = prev + 1;
        }
    }
    return ans;
};

var nums = [1, 1, 1];
nums = [1, 5, 2, 4, 1];
nums = [8];
nums = [7, 4, 2, 8, 1, 7, 7, 10];
nums = [1, 5, 2, 4, 1];
var ans = minOperations(nums);
console.log(ans);
