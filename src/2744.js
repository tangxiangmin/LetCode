/**
 * @param {string[]} words
 * @return {number}
 */
// 从前向后遍历，然后前面的word进行反转，使用hash记录
var maximumNumberOfStringPairs = function (words) {
    const map = {}
    let ans = 0
    for (const word of words) {
        if (map[word]) {
            ans++
        } else {
            map[reverse(word)] = true
        }
    }
    return ans

    function reverse(str) {
        return str.split('').reverse().join('')
    }
};

var words = ["cd", "ac", "dc", "ca", "zz"]
words = ["ab","ba","cc"]
words = ["aa","ab"]
var ans = maximumNumberOfStringPairs(words)
console.log(ans)