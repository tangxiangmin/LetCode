/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    var map = {};
    for (var i = 0; i < s.length; ++i) {
        var ch = s[i];
        if (!map[ch]) {
            map[ch] = 0;
        }
        map[ch]++;
    }
    var letters = Object.keys(map).sort();
    var ans = "";
    while (ans.length < s.length) {
        for (let i = 0; i < letters.length; ++i) {
            let ch = letters[i];
            if (map[ch]) {
                map[ch]--;
                ans += ch;
            }
        }
        for (let i = letters.length - 1; i >= 0; --i) {
            let ch = letters[i];
            if (map[ch]) {
                map[ch]--;
                ans += ch;
            }
        }
    }
    return ans;
};

var s = "aaaabbbbcccc";
var res = sortString(s);
console.log(res);
