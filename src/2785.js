/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const arr = []
    for (ch of s) {
        if (/a|e|i|o|u/ig.test(ch)) {
            arr.push(ch)
        }
    }
    arr.sort((a, b) => {
        return a.charCodeAt(0) - b.charCodeAt(0)
    })
    // console.log(arr)
    let ans = ''
    let idx = 0
    for (ch of s) {
        if (/a|e|i|o|u/ig.test(ch)) {
            ans += arr[idx]
            idx++
        } else {
            ans += ch
        }
    }
    return ans
};
var s = "lEetcOde"
var ans = sortVowels(s)
console.log(ans)