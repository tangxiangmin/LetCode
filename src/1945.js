/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    var tokens = [];
    var code = "a".charCodeAt(0);
    for (var ch of s) {
        var idx = ch.charCodeAt(0) - code + 1;
        tokens.push(`${idx}`);
    }

    var ans = tokens.join("");
    for (var i = 0; i < k; ++i) {
        ans = transform(ans);
    }
    return ans;
    function transform(s) {
        var ans = 0;
        for (var ch of s) {
            ans += parseInt(ch, 10);
        }
        return ans.toString();
    }
};
