/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
// 模拟借位相除
// 4/9 ->40 /9，余4,会进入循环，通过hash表来处理
var fractionToDecimal = function (n, d) {
    if (n === 0) return '0'
    const cache = {}
    const values = [] // 每一轮计算的结果
    let decimalIndex = -1 // 小数开始的位置
    let loopStartIndex = -1 // 循环开始的位置

    const negative = (n < 0 && d > 0) || (n > 0 && d < 0) // 是否为负数

    dfs(Math.abs(n), Math.abs(d), 0)

    return (negative ? '-' : '') + format()

    function format() {
        if (decimalIndex === -1) {
            return values.join('')
        }

        let ans = values.slice(0, decimalIndex).join('') + '.'

        if (loopStartIndex === -1) {
            ans += values.slice(decimalIndex).join('')
        } else {
            if (loopStartIndex >= decimalIndex) {
                ans += values.slice(decimalIndex, loopStartIndex).join('') + `(${values.slice(loopStartIndex).join('')})`
            } else {
                // 特殊处理整体循环的情况
                ans += `(${values.slice(decimalIndex).join('') + values.slice(0, decimalIndex)})`
            }
        }

        return ans
    }


    function dfs(n, d, index) {
        const v = Math.floor(n / d)
        cache[n] = index

        values[index] = v

        let extra = n % d
        if (extra === 0) {
            return
        }


        if (decimalIndex === -1) {
            decimalIndex = index + 1
        }

        extra *= 10

        if (cache[extra] !== undefined) {
            loopStartIndex = cache[extra]
            return
        }
        dfs(extra, d, index + 1)
    }
}

var numerator = 4, denominator = 333
numerator = 4, denominator = 9
numerator = 2, denominator = 4
numerator = 2, denominator = 99
numerator = -50, denominator = 8
numerator = -22, denominator = -2
numerator = 420, denominator = 226 // 该测试用例为整体循环，需要单独处理
var ans = fractionToDecimal(numerator, denominator)

console.log(ans)