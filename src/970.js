/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    var i = 0, j = 0;
    var arr = []

    var map = {}
    while (true) {
        var sum = Math.pow(x, i)
        if (sum > bound || map[sum]) {
            break
        }
        map[sum] = true
        i++
        arr.push(sum)
    }
    var ans = []
    while (true) {
        var val = Math.pow(y, j)
        var flag = false
        for (var i = 0; i < arr.length; ++i) {
            var sum = arr[i] + val
            if (sum <= bound && !ans.includes(sum)) {
                ans.push(sum)
                flag = true
            }
        }
        j++
        if (!flag) {
            break
        }
    }
    return ans
};

var x = 1, y = 2, bound = 100
var res = powerfulIntegers(x, y, bound)
console.log(res) // [2,3,4,5,7,9,10]