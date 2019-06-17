/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    } else if (numRows === 1) {
        return [[1]];
    }

    var ans = [[1], [1, 1]];
    for (var i = 2; i <= numRows; ++i) {
        var line = new Array(i+1).fill(1);
        var last = ans[i - 1];
        for (var j = 1; j < i; ++j) {
            line[j] = last[j - 1] + last[j];
        }
        ans.push(line);
    }
    return ans;
};

var res = generate(6);
console.log(res);
