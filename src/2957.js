/**
 * @param {string} word
 * @return {number}
 */
// 贪心
var removeAlmostEqualCharacters = function (word) {
    const n = word.length
    let ans = 0
    for (let i = 1; i < n; ++i) {
        // 如果相同，将当前元素修改为与前后都不相同的字符即可，然后跳过i+1个字符
        if (check(word[i - 1], word[i])) {
            ans++
            i++
        }
    }
    return ans

    function check(a, b) {
        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) <= 1
    }
};
var word = "aa"
word = "abddez"
var ans = removeAlmostEqualCharacters(word)
console.log(ans)