/**
 * @param {string} word
 * @return {number}
 */
// 思路，计算每个字符到其他字符的最短距离，最后得到的结果就是最短的
var minTimeToType = function (word) {
    var start = "a".charCodeAt(0);
    var end = "z".charCodeAt(0);
    var map = {};
    for (var i = start; i <= end; ++i) {
        map[String.fromCharCode(i)] = i - start;
    }

    var ans = 0;
    var prev = "a";
    for (var i = 0; i < word.length; ++i) {
        var ch = word[i];
        ans += nearst(prev, ch);
        ans += 1;
        prev = ch;
    }
    return ans;

    function nearst(c1, c2) {
        if (map[c1] > map[c2]) {
            var temp = c1;
            c1 = c2;
            c2 = temp;
        }

        var d1 = map[c2] - map[c1];
        var d2 = map[c1] - start + end - map[c2] + 1;
        return Math.min(d1, d2);
    }
};

var word = "abc";
word = "zjpc"
// word = "bza"
var ans = minTimeToType(word);
console.log(ans);
