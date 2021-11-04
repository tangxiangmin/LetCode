/**
 * @param {number[]} arr
 * @return {number}
 */
// 找到非递减数组中占比超过25%的那个数
// 思路，快慢指针，两个指针对应的值相等且间隔长度超过0.25*len的那个数就是
var findSpecialInteger = function (arr) {
    const len = arr.length;
    if (len === 1) return arr[0];

    var s = 0;
    var f = 0;
    while (f < arr.length) {
        if (arr[s] === arr[f]) {
            if (f - s + 1 > len * 0.25) {
                return arr[s];
            }
            f++;
            continue;
        }
        s = f;
        f++;
    }
    return -1;
};

var arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

// arr = [1, 2, 3, 3];

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12];
// arr = [1, 2, 3, 3];

var ans = findSpecialInteger(arr);
console.log(ans);
