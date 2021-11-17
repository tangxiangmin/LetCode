/**
 * @param {number[][]} rectangles
 * @return {number}
 */
// 思路，长和宽可以互换一下嘛
var countGoodRectangles = function (rectangles) {
    var max = 0;
    for (var ch of rectangles) {
        var [l, w] = ch;
        if (l > w) {
            ch[0] = w;
            ch[1] = l;
        }
        // 记录最大的宽
        if (max < ch[0]) {
            max = ch[0];
        }
    }
    return rectangles
        .sort((a, b) => b[0] - a[0])
        .filter((row) => row[0] === max).length;
};

var rectangles = [
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
];
var ans = countGoodRectangles(rectangles);
rectangles = [[2,3],[3,7],[4,3],[3,7]]
console.log(ans);
