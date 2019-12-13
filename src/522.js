/**
 * @param {string[]} strs
 * @return {number}
 */
// 思路，将列表按长度排序，从最长的开始依次检测是否是其他的子序列，如果是唯一的，则直接返回
var findLUSlength = function (strs) {
    // 按长度排序
    strs.sort((a, b) => b.length - a.length)

    for (var i = 0; i < strs.length; ++i) {
        var cur = strs[i]
        var hasSub = false
        for (var j = 0; j < strs.length; ++j) {
            if (i === j) continue;
            if (isSub(strs[j], cur)) {
                hasSub = true
            }
        }
        if (!hasSub) {
            return cur.length
        }
    }
    return -1

    function isSub(target, sub) {
        if (target.length < sub.length) {
            return false
        }
        var i = 0;
        var j = 0
        while (j < sub.length && i < target.length) {
            if (sub[j] === target[i]) {
                j++
                i++
            } else {
                i++
            }
        }
        return j === sub.length
    }
};

// var strs = ["aba", "cdc", "eae"]
// var res = findLUSlength(strs)
// console.log(res)