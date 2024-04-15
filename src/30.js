/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// words中所有字符串长度相等，使用一个固定长度的滑动窗口k来判断子串是否在words中，再判断下一个
// 先BF试一下
var findSubstring = function (s, words) {
    const need = {}
    let total = 0
    for (const word of words) {
        if (!need[word]) {
            need[word] = 0
            total++
        }
        need[word]++
    }
    const k = words[0].length
    const len = k * words.length
    const n = s.length
    const ans = []
    for (let i = 0; i < n; ++i) {
        let map = {}
        let cnt = 0
        let j = i
        while (j < i + len) {
            const word = s.substring(j, j + k)
            if (!need[word]) break
            if (!map[word]) map[word] = 0
            map[word]++
            if (map[word] === need[word]) {
                cnt++
            }
            j += k

        }
        if (cnt === total) {
            ans.push(i)
        }
    }
    return ans
}

// 上面的问题在于j每移动k个位置后，就会做很多重复的运算，可以将后面的结果缓存起来
var findSubstring = function (s, words) {
    const need = {}
    let total = 0
    for (const word of words) {
        if (!need[word]) {
            need[word] = 0
            total++
        }
        need[word]++
    }
    const k = words[0].length
    const len = k * words.length
    const n = s.length
    if (len > n) return false

    const ans = []
    let cache = []

    // 构建初始的窗口
    for (let i = 0; i < k; ++i) {
        let map = {}
        let cnt = 0
        let j = i
        while (j < i + len) {
            const word = s.substring(j, j + k)
            if (!need[word]) break
            if (!map[word]) map[word] = 0
            map[word]++
            if (map[word] === need[word]) {
                cnt++
            }
            j += k
        }
        cache.push({
            map,
            cnt
        })

        if (cnt === total) {
            ans.push(i)
        }
    }

    let r = len + k - 1
    let l = 0
    while (r < n) {
        const word = s.substring(l, l + k)
        const nextWord = s.substring(r + 1 - k, r + 1)

        const cacheIndx = (r + 1) % k
        r++
        l++

        let { map, cnt } = cache[cacheIndx]

        if (map[word]) {
            if (map[word] === need[word]) {
                cnt--
            }
            map[word]--
        }
        cache[cacheIndx].cnt = cnt
        if (!need[nextWord]) {
            continue
        }

        if (!map[nextWord]) map[nextWord] = 0
        map[nextWord]++
        if (need[nextWord] === map[nextWord]) {
            cnt++
        }
        if (cnt === total) {
            ans.push(l + k - 1)
        }
        cache[cacheIndx].cnt = cnt

    };
    return ans
}

var s = "barfoothefoobarman", words = ["foo", "bar"] // [0,9]

// barfoothefoobarman
s = "wordgoodgoodgoodbestword", words = ["word", "good", "best", "word"] // []
// s = "barfoofoobarthefoobarman", words = ["bar", "foo", "the"] // [6,9,12]
s = "lingmindraboofooowingdingbarrwingmonkeypoundcake", words = ["fooo", "barr", "wing", "ding", "wing"] // [13]
var ans = findSubstring(s, words)

console.log(ans)