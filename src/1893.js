/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    for (var i = left; i <= right; ++i) {
        var curCover = false;
        for (const range of ranges) {
            const [start, end] = range;
            if (i >= start && i <= end) {
                // 被range 覆盖
                curCover = true;
                break;
            }
        }
        if (!curCover) {
            return false;
        }
    }
    return true;
};

var ranges = [
        [1, 2],
        [3, 4],
        [5, 6],
    ],
    left = 2,
    right = 5;
    ranges = [[1,10],[10,20]], left = 21, right = 21
var ans = isCovered(ranges, left, right);
console.log(ans);
