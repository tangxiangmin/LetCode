/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */

var checkDistances = function (s, distance) {
    var map = {};
    var start = "a".charCodeAt(0);
    for (var i = 0; i < s.length; ++i) {
        var ch = s[i];
        if (map[ch]) continue;
        var idx = s.charCodeAt(i) - start;
        if (ch !== s[i + distance[idx] + 1]) return false;
        map[ch] = true;
    }
    return true;
};


var s = "abaccb",
    distance = [
        1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
    ];
    s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var ans = checkDistances(s, distance);
console.log(ans);
