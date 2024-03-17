/**
 * @param {string} s
 * @return {string}
 */
// 第 126 场双周赛 解题报告：https://leetcode.cn/circle/discuss/M6g5xr/

// 尽量不要出现重复的单词
const STR = 'abcdefghijklmnopqrstuvwxyz'

var minimizeStringValue = function (s) {
    const arr = s.split('')

    const map = {}
    const n = arr.length

    let blanks = []
    const cache = []
    for (let i = 0; i < n; ++i) {
        const ch = arr[i]
        if (ch === '?') {
            blanks.push(i)
        } else {
            if (!map[ch]) map[ch] = 0
            map[ch]++
        }
        cache.push({ ...map })
    }

    for (const blank of blanks) {
        arr[blank] = findMinCountChar(blank)
    }
    return arr.join('')
    function findMinCountChar(index) {
        // 有限使用未出现的字符
        for (const ch of STR) {
            if (!map[ch]) {
                map[ch] = 1
                return ch
            }
        }
        //
        const prev = cache[index]
        for (const ch of STR) {
            if (!prev[ch]) {
                map[ch]++
                return ch
            }
        }
        let min = 'a'
        for (const ch of STR) {
            if (prev[ch] < prev[min]) {
                ch = min
            }
        }
        map[min]++
        return min
    }
};

var s = '???'
s = "a?a?"
s = "abcdefghijklmnopqrstuvwxy??"
var ans = minimizeStringValue(s)
console.log(ans)