/**
 * @param {number} n
 * @return {number}
 */
// clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
// 使用一个标志位保存当前的操作步骤，再使用一个tmp值保存局部运算顺序的最终结果
var clumsy = function (n) {
    let dir = 0 // 对应*、/、+、-
    let ans = 0
    let tmp = n
    for (let i = n - 1; i >= 1; --i) {
        if (dir === 0) {
            tmp *= i
        } else if (dir === 1) {
            ans += tmp < 0 ? Math.ceil(tmp / i) : Math.floor(tmp / i)
            tmp = 0
        } else if (dir === 2) {
            ans += i
            tmp = 0
        } else if (dir === 3) {
            // 要把之前的tmp减去
            tmp = -1 * i
        }
        dir = (dir + 1) % 4
    }
    ans += tmp
    return ans
};

var n = 4 // 7
// n = 10 // 12
// n = 3
var ans = clumsy(n)
console.log(ans)