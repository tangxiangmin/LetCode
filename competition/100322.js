/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
    const arr = s.split('')
    const n = arr.length
    const map = new Map()

    for (let i = 0; i < n; ++i) {
        const ch = arr[i]
        if (ch === '*') {
            arr[i] = '-'
            // todo 删除最小字段序字符最右侧的数字
            const keys = Array.from(map.keys()).sort()
            const element = keys[0]
            const pos = map.get(element)
            const idx = pos[pos.length - 1]
            arr[idx] = '-'
            pos.pop()

            if (!pos.length) {
                map.delete(element)
            }
        } else {
            if (!map.get(ch)) map.set(ch, [])
            map.get(ch).push(i)
        }
    }
    let ans = ''
    for (const ch of arr) {
        if (ch !== '-') {
            ans += ch
        }
    }
    return ans
};
var s = "aaba*"
s = "abc"
s = "bbe***"
var ans = clearStars(s)
console.log(ans)