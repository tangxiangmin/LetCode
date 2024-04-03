/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
    const words = s.split(' ')

    let max = 0
    for (const word of words) {
        max = Math.max(max, word.length)
    }

    let ans = []
    for (let i = 0; i < max; ++i) {
        let str = ''
        for (const word of words) {
            str += i < word.length ? word[i] : ' '
        }
        ans.push(str.trimEnd())
    }
    return ans
};
var s = "HOW ARE YOU"
s = "TO BE OR NOT TO BE"
s = "CONTEST IS COMING"
var ans = printVertically(s)
console.log(ans)