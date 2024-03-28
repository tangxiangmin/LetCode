/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
// 看起来就是让这三个字符串的长度最大长度都变成2，且前1位或2位要相同
var findMinimumOperations = function (s1, s2, s3) {
    const n1 = s1.length
    const n2 = s2.length
    const n3 = s3.length

    let i = 0
    let len = 0 // 记录字符串的前n个字符相同
    const min = Math.min(n1, n2, n3)
    while (i < min) {
        if (s1[i] === s2[i] && s2[i] === s3[i]) {
            len++
        } else {
            break
        }
        i++
    }
    if (len === 0) return -1
    return n1 - len + n2 - len + n3 - len
};
var s1 = "abc", s2 = "abb", s3 = "ab"
s1 = "dac", s2 = "bac", s3 = "cac"
var ans = findMinimumOperations(s1, s2, s3)
console.log(ans)