/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
// 最多旋转4次
var findRotation = function (mat, target) {
    if (isEqual(mat, target)) return true;
    mat = rotate(mat);
    if (isEqual(mat, target)) return true;
    mat = rotate(mat);

    if (isEqual(mat, target)) return true;
    mat = rotate(mat);

    return isEqual(mat, target);

    function rotate(arr) {
        var n = arr.length;
        var ans = [];
        for (var i = 0; i < n; ++i) {
            var row = new Array(n);
            ans.push(row);
        }
        for (var i = 0; i < n; ++i) {
            for (var j = 0; j < n; ++j) {
                ans[j][n - 1 - i] = arr[i][j];
            }
        }
        return ans;
    }
    function isEqual(arr1, arr2) {
        var n = arr1.length;
        for (var i = 0; i < n; ++i) {
            for (var j = 0; j < n; ++j) {
                if (arr1[i][j] !== arr2[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
};

var mat = [
        [0, 1],
        [1, 0],
    ],
    target = [
        [1, 0],
        [0, 1],
    ];
var ans = findRotation(mat, target);
console.log(ans);
