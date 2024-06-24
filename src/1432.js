/**
 * @param {number} num
 * @return {number}
 */
// 将首位变成9就得到最大，变成1就变成最小
var maxDiff = function (num) {
    num = num.toString()
    const a = replace('9',)
    const b = replaceMin()

    // console.log(a, b)
    return a - b
    function replace(val) {
        let i = 0
        const n = num.length
        while (i < n && num[i] === val) {
            i++
        }
        return i < num.length ? num.replaceAll(num[i], val) : num
    }
    function replaceMin() {
        if (num.length === 1) return 1
        if (num[0] != '1') {
            return num.replaceAll(num[0], '1')
        }
        let i = 0
        const n = num.length
        while (i < n && (num[i] === '1' || num[i] === '0')) {
            i++
        }
        if (i === num.length) {
            return num
        }
        return num.replaceAll(num[i], '0')

    }
};
var num = 555
num = 123456
num = 111
num = 1101057
var ans = maxDiff(num)
console.log(ans)