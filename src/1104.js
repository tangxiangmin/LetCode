/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {

    var deep
    var arr = []
    for (var i = 1; i < 100; ++i) {
        var start = Math.pow(2, i - 1)
        var end = Math.pow(2, i) - 1
        arr.push([start, end])
        if (label <= end) {
            deep = i
            break
        }
    }

    var ans = []
    while (deep > 0) {
        ans.unshift(label)
        var [start, end] = arr[deep - 1]
        var prevIndex = deep % 2 === 0 ? Math.floor((end - label) / 2) : Math.floor((label - start) / 2) // 在上一层的索引

        deep--

        if (deep > 0) {
            var [prevStart, prevEnd] = arr[deep - 1]
            label = deep % 2 === 0 ? prevEnd - prevIndex : prevStart + prevIndex
        }
    }

    return ans
};

var ans = pathInZigZagTree(14)
var ans = pathInZigZagTree(26)

console.log(ans)