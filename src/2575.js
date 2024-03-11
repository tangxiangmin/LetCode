/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
// 思路，word的数字可能会非常长，即使使用BigInt也会超时
var divisibilityArray = function (word, m) {
    var ans = []
    var prev = ''
    for (const ch of word) {
        prev += ch
        if (prev % m === 0) {
            ans.push(1)
        } else {
            ans.push(0)
        }
    }
    return ans
};

// 参考题解：每次遍历，当前数字可以表示为a * 10 + b，其中a表示前面的数字，则(a * 10 + b) % m = (a % m * 10 + b) % m
// 在计算中取模
var divisibilityArray = function (word, m) {
    const res = [];
    let cur = 0;
    for (const c of word) {
        cur = (cur * 10 + (c.charCodeAt(0) - '0'.charCodeAt(0))) % m;
        res.push(cur === 0 ? 1 : 0);
    }
    return res;
};


var word = "998244353", m = 3
word = "1010", m = 10
word = "86217457695827338571", m = 8
var ans = divisibilityArray(word, m)
console.log(ans)