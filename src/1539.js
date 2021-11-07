/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    var len = arr.length;
    var last = arr[len - 1];

    var prev = 0;

    for (var i = 0; i < len; ++i) {
        var cur = arr[i];
        for (var j = prev + 1; j < cur; ++j) {
            k--;
            if (k == 0) {
                return j;
            }
        }
        prev = cur;
    }
    return last + k;
};

var arr = [2, 3, 4, 7, 11],
    k = 5;

// (arr = [1, 2, 3, 4]), (k = 2);
var ans = findKthPositive(arr, k);
console.log(ans);
