/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    var map = {};
    for (var str of arr) {
        if (!map[str]) {
            map[str] = 0;
        }
        map[str]++;
    }
    for (var i = 0; i < arr.length; ++i) {
        var str = arr[i];
        if (map[str] === 1) {
            k--;
        }
        if (k === 0) {
            return str;
        }
    }

    return "";
};

var arr = ["d", "b", "c", "b", "c", "a"],
    k = 2;

(arr = ["aaa", "aa", "a"]), (k = 1);
(arr = ["a", "b", "a"]), (k = 3);
var ans = kthDistinct(arr, k);
console.log(ans);
