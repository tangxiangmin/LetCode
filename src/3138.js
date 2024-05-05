/**
 * @param {string} s
 * @return {number}
 */
// 欧几里得算法，求两个数的最大公约数
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 计算数组的最大公约数
function gcdOfArray(arr) {
    if (arr.length === 1) {
        return arr[0]
    }

    // 从第一个元素开始，逐个与下一个元素计算最大公约数
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
        // 如果最大公约数为 1，则提前返回
        if (result === 1) {
            return 1;
        }
    }
    return result;
}
var minAnagramLength = function (s) {
    const map = {}
    for (const ch of s) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }

    const arr = Object.values(map)
    const v = gcdOfArray(arr)

    let cnt = 0
    for (const key in map) {
        cnt += map[key] / v
    }

    return cnt
};

var s = "jjj"
// s = "abba"
// s = "pqqppqpqpq"
var ans = minAnagramLength(s)
console.log(ans)