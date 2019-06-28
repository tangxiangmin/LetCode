/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = new Map();
    for (var i = 0; i < strs.length; ++i) {
        var str = Array.prototype.sort.call(strs[i].split(''), (a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');

        if (!map.has(str)) {
            map.set(str, []);
        }
        var data = map.get(str);
        data.push(strs[i]);
        map.set(str, data);
    }

    var ans = [];
    map.forEach((val, key) => {
        ans.push(val);
    });
    return ans;
};
