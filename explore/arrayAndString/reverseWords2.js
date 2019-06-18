/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var l = 0;
    var r = 0;
    s = s.split("");
    var len = s.length;
    while (r <= len) {
        if (r < len && s[r] !== " ") {
            r++;
            continue;
        }
        r -= 1;
        var end = r;
        while (l < end) {
            var tmp = s[l];
            s[l++] = s[end];
            s[end--] = tmp;
        }

        r += 2;
        l = r;
    }

    return s.join("");
};

var str = "Let's take LeetCode contest";
var res = reverseWords(str);
console.log(res);
