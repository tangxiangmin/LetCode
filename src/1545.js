/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
// BF先试试
var findKthBit = function (n, k) {

    function reverse(str) {
        let ans = ''
        for (let i = str.length - 1; i >= 0; --i) {
            ans += str[i]
        }
        return ans
    }
    function invert(str) {
        let ans = ''
        for (const ch of str) {
            ans += ch === '0' ? '1' : '0'
        }
        return ans
    }
    function build(n) {
        if (n === 1) return '0'
        const prev = build(n - 1)
        return prev + "1" + reverse(invert(prev))
    }
    const str = build(n)
    return str[k - 1]
};


// 参考一下题解
const invert = (bit) => bit === '0' ? '1' : '0';
var findKthBit = function (n, k) {
    if (k == 1) {
        return '0';
    }
    const mid = 1 << (n - 1);
    if (k == mid) {
        return '1';
    } else if (k < mid) {
        return findKthBit(n - 1, k);
    } else {
        k = mid * 2 - k;
        return invert(findKthBit(n - 1, k));
    }
};

var n = 3, k = 1
n = 4, k = 11
var ans = findKthBit(n, k)
console.log(ans)