/**
 * @param {number[]} nums
 * @return {number}
 */
// 找到必须要被移除的那个数组，然后左右都可以选择要被移除的元素
var incremovableSubarrayCount = function (a) {
    var n = a.length;
    var i = 0;
    while (i < n - 1 && a[i] < a[i + 1]) {
        i++;
    }

    // 本身就是严格递增的数组
    if (i == n - 1) { // 每个非空子数组都可以移除
        return n * (n + 1) / 2;
    }

    var ans = i + 2;
    for (var j = n - 1; j == n - 1 || a[j] < a[j + 1]; j--) {
        while (i >= 0 && a[i] >= a[j]) {
            i--;
        }
        ans += i + 2;
    }
    return ans;
};


var nums = [5, 3, 4, 6, 7]
// nums = [1, 2, 3, 4]
nums = [6, 5, 7, 8]
var ans = incremovableSubarrayCount(nums)
console.log(ans)
