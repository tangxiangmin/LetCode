/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    var map = {};
    for (var num of arr) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }
    var values = Object.values(map);
    return values.length === Array.from(new Set(values)).length;
};
var arr = [1, 2];
arr = [1, 2, 2, 1, 1, 3];
var ans = uniqueOccurrences(arr);
console.log(ans);
