// 给定一个版本数组和一个 isBadVersion 的API,找到最开始出错的那个版本
// [1,2,3,4,5,6,7,8],错误版本后面全是错误的

// 思路：二分法
var solution = function (isBadVersion) {
    return function (n) {
        let l = 0
        let r = n - 1
        while (l <= r) {
            const mid = l + ((r - l) >> 1)
            if (isBadVersion(mid)) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return l
    };
};

