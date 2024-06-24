/**
 * @param {string} target
 * @return {number}
 */
// 连续的0可以视为1个0，连续的1可以视为1个1，压缩之后，从第一个出现的1开始，后面的数字都需要变
var minFlips = function (target) {
    let s = ''
    let prev = ''
    for (const ch of target) {
        if (prev !== ch) {
            s += ch
            prev = ch
        }
    }
    const idx = s.indexOf('1')

    if (idx === -1) return 0

    return s.length - idx
};
var target = "101"
// 000 -> 111 -> 100 -> 101
var ans = minFlips(target)
console.log(ans)