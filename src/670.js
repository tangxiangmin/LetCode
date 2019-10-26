/**
 * @param {number} num
 * @return {number}
 */


// 最后参考了题解的贪心算法
var maximumSwap = function (num) {
    var arr = num.toString().split('')
    var len = arr.length

    var last = {}
    arr.forEach((d, i) => {
        last[d] = i
    })

    for (var i = 0; i < len; ++i) {
        var cur = arr[i]

        for (var j = 9; j > +cur; --j) {
            if (last[j] !== undefined && last[j] > i) {
                var tmp = last[j]
                var ch = arr[tmp]
                arr[tmp] = arr[i]
                arr[i] = ch
                return +arr.join('')
            }
        }
    }
    return num
};

var num = 2736
num = 98368
// num = 115
// num = 111
// num = 1993
// num = 10909091
var res = maximumSwap(num)
console.log(res) 