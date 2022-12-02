/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    var map = [];
    for (var i = 0; i < mat.length; ++i) {
        const row = mat[i];
        var total = 0;
        for (var j = 0; j < row.length; ++j) {
            if (row[j] === 0) {
                break;
            }
            total++;
        }
        map.push({ sum: total, index: i });
    }
    return map.sort((a, b) => a.sum - b.sum).slice(0, k).map(row=>row.index);
};

var mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
];

var ans = kWeakestRows(mat,3);
console.log(ans);
