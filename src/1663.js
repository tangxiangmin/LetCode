/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 思路：字典序最小，则从a开始拼接长度为n的字符串，优先修改末尾的字符
var getSmallestString = function (n, k) {
    const start = 'a'.charCodeAt(0)
    const arr = new Array(n).fill('a')

    let i = n - 1
    while (i >= 0) {
        if (k === i + 1) break
        let cur = k - i
        if (cur <= 26) {
            arr[i] = String.fromCharCode(cur - 1 + start)
            break
        }

        k -= 26
        arr[i] = 'z'
        i--
    }
    return arr.join('')
};

var n = 3, k = 27
n = 5, k = 73
var ans = getSmallestString(n, k)
console.log(ans)