/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var map = {}
    for (var str of strs) {
        var key = Array.from(str).sort().join()
        if (!map[key]) map[key] = []
        map[key].push(str)
    }
    return Object.values(map)
};