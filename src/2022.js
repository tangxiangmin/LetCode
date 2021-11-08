/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    var len = original.length;
    if (len !== m * n) return [];
    var ans = [];
    for (var i = 0; i < len;) {
        var row = [];
        for (var j = 0; j < n; ++j) {
            row.push(original[ans.length * n + j]);
            i++
        }
        ans.push(row);
    }
    return ans;
};

var original = [1, 2, 3, 4],
    m = 2,
    n = 2;
var ans = construct2DArray(original, m, n);
console.log(ans);
