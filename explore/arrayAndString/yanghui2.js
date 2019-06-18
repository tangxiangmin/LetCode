/**
 * 2019/6/18 下午10:16
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [];
    } else if (rowIndex === 1) {
        return [1];
    }

    var last = [1, 1];
    for (var i = 2; i <= rowIndex; ++i) {
        var line = new Array(i + 1).fill(1);
        for (var j = 1; j < i; ++j) {

            line[j] = last[j - 1] + last[j];
        }
        last = line;
    }
    return last;
};

var res = getRow(3)
console.log(res)
