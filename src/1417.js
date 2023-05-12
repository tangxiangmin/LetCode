/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    var nums = [];
    var chars = [];
    for (var ch of s) {
        var list = isNum(ch) ? nums : chars;
        list.push(ch);
    }
    if (Math.abs(nums.length - chars.length) > 1) return "";
    var ans = "";

    var short = nums.length > chars.length ? chars : nums;
    var long = nums.length > chars.length ? nums : chars;

    for (var i = 0; i < short.length; ++i) {
        ans += long[i] + short[i];
    }

    if (long[i]) {
        ans += long[i];
    }

    return ans;

    function isNum(ch) {
        return /\d/.test(ch);
    }
};

var s = "a0b1c2";
s = "leetcode";
s = "1229857369";
s = "covid2019";
var ans = reformat(s);
console.log(ans);
