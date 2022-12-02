/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    var len = A.length;
    var left = 0;
    var right = len - 1;
    var res = [];
    while (left <= right) {
        var l2 = A[left] * A[left];
        var r2 = A[right] * A[right];
        if (l2 > r2) {
            res[len - 1] = l2;
            left++;
        } else {
            res[len - 1] = r2;
            right--;
        }
        len--;
    }
    return res;
};

var sortedSquares = function (nums) {
    var len = nums.length;
    var l = 0;
    var r = len - 1;
    var ans = [];
    var index = r;
    while (l <= r) {
        var l2 = nums[l] * nums[l];
        var r2 = nums[r] * nums[r];
        if (l2 < r2) {
            ans[index] = r2; // 将最大的放进来
            r--;
        } else {
            ans[index] = l2;
            l++;
        }
        index--;
    }
    return ans;
};

var nums = [-1, 2, 2];
var nums = [-4, -1, 0, 3, 10];
var res = sortedSquares(nums);

console.log(res);
