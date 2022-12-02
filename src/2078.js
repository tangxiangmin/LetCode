/**
 * @param {number[]} colors
 * @return {number}
 */
// 先来个BF
var maxDistance = function (colors) {
    var len = colors.length;
    var max = 0;
    for (var i = 0; i < len; ++i) {
        for (var j = i + 1; j < len; ++j) {
            if (colors[j] !== colors[i]) {
                max = Math.max(max, j - i);
            }
        }
    }
    return max;
};
// 思路2： 从头向尾走，碰到第一组颜色不一样的，肯定是最大值了
var maxDistance = function (colors) {
    var n = colors.length;
    var r = n - 1,
        l = 0;
    while (r >= 0 && colors[r] == colors[0]) --r;
    while (l < n && colors[l] == colors[n - 1]) ++l;
    return Math.max(r, n - 1 - l);
};

var colors = [1, 1, 1, 6, 1, 1, 1]; // [[0,2],3,[4,6]]

// colors = [1, 8, 3, 8, 3];

var ans = maxDistance(colors);
console.log(ans);
