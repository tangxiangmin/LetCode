/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    var table = {};
    var start = "a".charCodeAt(0);
    var len = "z".charCodeAt(0) - start;
    for (var i = 0; i <= len; ++i) {
        var ch = String.fromCharCode(i + start);
        table[i] = ch;
    }

    var map = { " ": " " };
    var omit = 0;
    for (var i = 0; i < key.length; ++i) {
        var ch = key[i];
        if (!map[ch]) {
            map[ch] = table[i - omit];
        }else {
            omit++
        }
    }
    var ans = "";
    for (var ch of message) {
        ans += map[ch];
    }
    return ans;
};

var key = "the quick brown fox jumps over the lazy dog",
    message = "vkbs bs t suepuv";

var ans = decodeMessage(key, message);
console.log(ans);
