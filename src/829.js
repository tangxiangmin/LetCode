/**
 * @param {number} n
 * @return {number}
 */
// 前缀和加哈希，O(n)居然会超时
var consecutiveNumbersSum = function (n) {
    const arr = []
    let prevSum = 0
    const map = {}
    for (let i = 0; i < n; ++i) {
        arr[i] = prevSum + i + 1
        prevSum = arr[i]
        map[prevSum] = 1
    }


    let ans = 0

    if (map[n]) {
        ans++
    }

    for (let i = n - 1; i >= 0; --i) {
        var val = arr[i] - n
        if (val < 0) break
        if (map[val]) {
            ans++
        }
    }
    return ans
};

var consecutiveNumbersSum = function (n) {
    var res = 0;
    var a = 1, b = 0;
    while ((n - b) / a > 0) {
        if ((n - b) % a == 0) res += 1;
        b += a++;
    }
    return res;
}
var n = 5
// [1,2,3,4,5]
// [0, 1, 3, 6, 10]
n = 9
n = 15
var ans = consecutiveNumbersSum(n)
console.log(ans)