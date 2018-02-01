// 给定一个版本数组和一个 isBadVersion 的API,找到最开始出错的那个版本
// [1,2,3,4,5,6,7,8],错误版本后面全是错误的

// 思路：二分法
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1,
            right = n
        while(left < right) {
            var mid = Math.floor((left + right)/2)
            if (isBadVersion(mid)){
                right = mid
            }else {
                left = mid + 1
            }
        }
        return left
    };
};
