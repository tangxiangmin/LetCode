/**
 * @param {string} s
 * @return {number}
 */
// 模拟二进制+1进位 和 除2左移
var numSteps = function (s) {
    const arr = s.split("")
    let cnt = 0
    while (arr.length > 1) {
        const len = arr.length
        const last = arr[len - 1]
        cnt++
        if (last === '0') {
            arr.pop()
        } else {
            let i = len - 1

            while (i >= 0 && arr[i] === '1') {
                arr[i] = '0'
                i--
            }
            if (i === -1) {
                arr.unshift('1')
            } else {
                arr[i] = '1'
            }
        }
    }

    return cnt
};

var s = "1101"
s = "1111011110000011100000110001011011110010111001010111110001"
// s = "11001"
var ans = numSteps(s)
console.log(ans)