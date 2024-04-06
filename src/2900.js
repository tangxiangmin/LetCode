/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
// 实际上是求groups中相邻元素不相同的子序列，然后映射words中的字符串作为答案
// groups是二进制数组，元素只有0和1，那么对于1个元素，只有加入子序列和不加入两种情况
var getLongestSubsequence = function (words, groups) {
    const n = groups.length
    function dfs(i, ch, path) {
        while (i < n && groups[i] !== ch) {
            i++
        }
        if (i === n) return []
        path.push(i)
        dfs(i + 1, ch === 0 ? 1 : 0, path)
    }

    const p0 = []
    const p1 = []
    dfs(0, 0, p0) // 开头为0
    dfs(0, 1, p1) // 开头为1
    const path = p0.length > p1.length ? p0 : p1

    return path.map(i => words[i])
};

// 改成循环
var getLongestSubsequence = function (words, groups) {
    const n = groups.length
    const p0 = [] // 0
    const p1 = []
    for (let i = 0; i < n; ++i) {
        const ch = groups[i]
        if (ch === 0) {
            if (!p0.length || groups[p0[p0.length - 1]] === 1) {
                p0.push(i)
            }
            if (p1.length && groups[p1[p1.length - 1]] === 1) {
                p1.push(i)
            }
        } else {
            if (!p1.length || groups[p1[p1.length - 1]] === 0) {
                p1.push(i)
            }
            if (p0.length && groups[p0[p0.length - 1]] === 0) {
                p0.push(i)
            }
        }
    }
    const path = p0.length > p1.length ? p0 : p1

    return path.map(i => words[i])
}

var words = ["e", "a", "b"], groups = [0, 0, 1]
words = ["a", "b", "c", "d"], groups = [1, 0, 1, 1]
var ans = getLongestSubsequence(words, groups)
console.log(ans)