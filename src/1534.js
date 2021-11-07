/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

//  0 <= i < j < k < arr.length
//  |arr[i] - arr[j]| <= a
//  |arr[j] - arr[k]| <= b
//  |arr[i] - arr[k]| <= c

var countGoodTriplets = function (arr, a, b, c) {
    var len = arr.length;
    var ans = 0;
    for (var i = 0; i < len; ++i) {
        for (var j = i + 1; j < len; ++j) {
            for (var k = j + 1; k < len; ++k) {
                var n1 = arr[i];
                var n2 = arr[j];
                var n3 = arr[k];
                if (
                    Math.abs(n1 - n2) <= a &&
                    Math.abs(n2 - n3) <= b &&
                    Math.abs(n1 - n3) <= c
                ) {
                    ans++;
                }
            }
        }
    }
    return ans;
};

var arr = [3, 0, 1, 1, 9, 7],
    a = 7,
    b = 2,
    c = 3;

// var arr = [1, 1, 2, 2, 3],
//     a = 0,
//     b = 0,
//     c = 1;

arr = [7, 3, 7, 3, 12, 1, 12, 2, 3];
a = 5;
b = 8;
c = 1;
var ans = countGoodTriplets(arr, a, b, c);
console.log(ans);
