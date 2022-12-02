// 给定一个版本数组和一个 isBadVersion 的API,找到最开始出错的那个版本
// [1,2,3,4,5,6,7,8],错误版本后面全是错误的

// 思路：二分法
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var left = 1,
            right = n;
        while (left < right) {
            var mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

function left_bound(nums, target) {
    var l = 0;
    var r = nums.length;
    while (l < r) {
        var m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) {
            r = m;
        } else if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] > target) {
            r = m;
        }
    }
    if (l === nums.length) return -1;
    return nums[l] == target ? l : -1;
}

function left_bound2(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l <= r) {
        var m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) {
            r = m - 1;
        } else if (nums[m] > target) {
            r = m - 1;
        } else if (nums[m] < target) {
            l = m + 1;
        }
    }
    
    if (l >= nums.length || nums[left] !== target) {
        return -1;
    }
    return l;
}

var ans = left_bound([1, 2, 2, 2, 3, 4, 5]);
console.log(ans);
