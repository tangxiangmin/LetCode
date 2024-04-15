/**
 * @param {string} word
 * @return {number}
 */
// 思路，每个子串必须是a开头，u结尾，从头构建滑动窗口
var longestBeautifulSubstring = function (word) {
    const n = word.length
    let l = 0
    let r = 0
    const letters = ['a', 'e', 'i', 'o', 'u']
    let letterIndex = 0
    let ans = 0
    while (word[r] !== 'a' && r < n) {
        r++
    }
    l = r

    while (r < n) {
        const ch = word[r]
        const idx = letters.indexOf(ch)
        if (idx === letterIndex) {
            // 相同字符
            if (letterIndex === 4) {
                ans = Math.max(r - l + 1, ans)
            }
        } else if (idx == letterIndex + 1) {
            // 下一个字符
            letterIndex++
            if (letterIndex === 4) {
                ans = Math.max(r - l + 1, ans)
            }
        }
        else {
            // 没有按顺序，需要丢弃子串
            while (word[r] !== 'a' && r < n) {
                r++
            }
            l = r
            letterIndex = 0
        }
        r++
    }
    return ans
};
var word = "aeiouuu"
word = "auoeioueiaaioeuieuoaieuaoeuoaiaoueioiaeuiuaeouaoie"
word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
word = "eioueaii"
var ans = longestBeautifulSubstring(word)
console.log(ans)