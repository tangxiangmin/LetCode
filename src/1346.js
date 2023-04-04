/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    var map = {};
    for (var val of arr) {
        if (map[val * 2] || (map[val / 2] && val % 2 === 0)) {
            return true;
        }
        map[val] = true
    }
    return false;
};

var arr = [7, 1, 14, 11];
arr = [-10, 12, -20, -8, 15];
var ans = checkIfExist(arr);
console.log(ans);
