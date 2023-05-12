/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 思路，找到升序的位置
var nextPermutation = function (nums) {
    var len = nums.length;

    var idx = -1;
    // 从后向前找到第一个非升序的位置
    for (var i = len - 1; i > 0; --i) {
        var cur = nums[i];
        var prev = nums[i - 1];
        if (cur > prev) {
            idx = i - 1;
            break;
        }
    }
    if (idx === -1) return nums.reverse();

    // 重新重后向前，找到第一个大于非升序位置的元素，调换位置
    for (var i = len - 1; i > idx; --i) {
        var cur = nums[i];
        if (cur > nums[idx]) {
            swap(idx, i);
            break;
        }
    }
    // 将剩余的元素按升序排，由于截止到非升序位置的元素都是升序的，只需要反转一下即可
    reserve(idx + 1, len - 1);

    return nums;

    function swap(i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    
    function reserve(start, end) {
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
};

var nums = [1, 2, 3];
nums = [3, 2, 1];
nums = [1, 3, 4, 2];

// nums = [2, 6, 3, 5, 4, 1]; //
nums = [4,0,5,29,14,16,9,2,12,14,7,27,15,4,8,11,2,18,29,3,16,8,10,22,11,10,15,1,1,0,28,5,0,26,4,6,12,5,8,16,12,8,14,27,12,14,0,6,2,29,9,10,8,11,3]

var ans = nextPermutation(nums);
console.log(ans);

[4,0,5,29,14,16,9,2,12,14,7,27,15,4,8,11,2,18,29,3,16,8,10,22,11,10,15,1,1,0,28,5,0,26,4,6,12,5,8,16,12,8,14,27,12,14,0,6,2,29,9,10,8,3,11]
[4,0,5,29,14,16,9,2,12,14,7,27,15,4,8,11,2,18,29,3,16,8,10,22,11,10,15,1,1,0,28,5,0,26,4,6,12,5,8,16,12,8,14,27,12,14,0,6,2,29,9,10,11,3,8]