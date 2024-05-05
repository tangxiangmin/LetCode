/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
// 找到每个窗口中出现频率最大的字符串出现次数，然后将其余窗口替换成该字符串
var minimumOperationsToMakeKPeriodic = function (word, k) {
    const n = word.length
    const len = n / k
    const map = {}
    let max = 0
    for (let i = 0; i < len; ++i) {
        const str = word.substring(i * k, (i + 1) * k)
        if (!map[str]) {
            map[str] = 0
        }
        map[str]++
        max = Math.max(map[str], max)
    }
    return len - max
};
var word = "leetcodeleet", k = 4
var ans = minimumOperationsToMakeKPeriodic(word, k)
console.log(ans)