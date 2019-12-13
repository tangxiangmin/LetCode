/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// 思路，每个版本之间比较
var compareVersion = function (version1, version2) {
    var arr1 = version1.split('.')
    var arr2 = version2.split('.')

    var len = Math.max(arr1.length, arr2.length)

    for (var i = 0; i < len; ++i) {
        var v1 = +arr1[i] || 0
        var v2 = +arr2[i] || 0
        if (v1 > v2) return 1
        if (v1 < v2) return -1
    }
    return 0
};