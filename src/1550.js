/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 快慢指针
var threeConsecutiveOdds = function (arr) {
    var s = 0;
    var f = 0;

    while (f < arr.length) {
        if (arr[s] % 2 === 0) {
            s++;
            f++;
            continue;
        }

        if (arr[f] % 2) {
            if (f - s >= 2) {
                return true;
            }
            f++;
            continue;
        }

        s = f;
        f++;
    }
    return false;
};

var arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
// arr = [2, 6, 4, 1];
// arr = [1, 1, 1];
arr = [1, 2, 1, 1];
var ans = threeConsecutiveOdds(arr);
console.log(ans);
