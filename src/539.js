/**
 * @param {string[]} timePoints
 * @return {number}
 */
// 思路，将所有的值都转换为分钟，然后找到最小差，需要注意是一个环形的列表
var findMinDifference = function (timePoints) {
    var minutes = timePoints.map(parseMinute)
    minutes.sort((a, b) => a - b)

    // 增加一轮
    var len = minutes.length
    for (var i = 0; i < len; ++i) {
        minutes.push(24 * 60 + minutes[i])
    }

    var min = Infinity
    // 正序遍历
    for (var i = 0; i < minutes.length - 1; ++i) {
        var cur = minutes[i]
        var next = minutes[i + 1]
        var diff = next - cur
        min = Math.min(diff, min)
    }
    return min
    function parseMinute(time) {
        var [hour, min] = time.split(':')
        return hour * 60 + +min
    }
};

var arr = ["23:59", "00:00"]
var res = findMinDifference(arr)
console.log(res)