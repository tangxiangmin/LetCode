/**
 * @param {string} s
 * @return {string}
 */
// 回文的话，看起来就是双指针
var makeSmallestPalindrome = function (s) {
    const arr = s.split("")
    var l = 0
    var r = arr.length - 1
    while (l < r) {
        let a = arr[l]
        let b = arr[r]
        if (a !== b) {
            a = a < b ? a : b
            arr[l] = a
            arr[r] = a
        }
        l++
        r--
    }
    return arr.join('')
};

var s = "egcfe"
s = "abcd"
s = "seven"
var ans = makeSmallestPalindrome(s)
console.log(ans)