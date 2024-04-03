/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// 对于每个单词而言，不是这一行最后一个单词的，都需要后面跟一个空格
var fullJustify = function (words, maxWidth) {
    const n = words.length
    const ans = []
    let i = 0
    while (i < n) {
        let row = []
        let count = 0
        while (i < n && count + words[i].length + (row.length >= 1 ? 1 : 0) <= maxWidth) {
            row.push(words[i])
            count += words[i].length
            if (row.length > 1) {
                count += 1
            }
            i++
        }
        // 排列row，使空格均匀分布
        const str = i < n ? align(row) : alignLast(row)
        ans.push(str)
    }

    return ans

    function alignLast(row) {
        const s = row.join(' ')
        const extra = maxWidth - s.length
        return s + ''.padEnd(extra, ' ')
    }
    function align(row) {
        const n = row.length

        const len = row.reduce((acc, s) => acc + s.length, 0)
        const extra = maxWidth - len
        if (n === 1) {
            return row[0] + "".padEnd(extra, ' ')
        }

        const per = Math.floor((extra) / (n - 1))
        const left = extra - per * (n - 1)   // 前left个每个会多一个
        const base = "".padEnd(per, ' ')

        let s = ''
        for (let i = 0; i + 1 < n; ++i) {
            s += row[i] + base
            if (i < left) {
                s += ' '
            }
        }
        s += row[n - 1]
        return s
    }
};

var words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
words = ["What", "must", "be", "acknowledgment", "shall", "be"], maxWidth = 16
words = ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], maxWidth = 20

words = ["Imagination", "is", "more", "important", "than", "knowledge."], maxWidth = 14
var ans = fullJustify(words, maxWidth)
console.log(ans)