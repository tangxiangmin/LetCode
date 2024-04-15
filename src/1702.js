/**
 * @param {string} binary
 * @return {string}
 */
// 1更靠近前面，则数字更大，先模拟一下
// 对于每个0，向后找到最近的0，可以将他直接挪过来
var maximumBinaryString = function (binary) {
    let arr = binary.split('')
    const n = arr.length

    // 替换00到10
    let i = 0
    let j = i + 1 // 最远的为1的位置
    while (i < n) {
        if (arr[i] == '1') {
            i++

            continue
        }
        j = Math.max(i + 1, j)
        while (i < n && arr[j] === '1') {
            j++
        }
        if (j < n) {
            arr[j] = '1'
            arr[i] = '1'
            arr[i + 1] = '0'
        }
        i++
    }
    return arr.join('')
};
var binary = "000110"
// binary = "01"
var ans = maximumBinaryString(binary)
console.log(ans)