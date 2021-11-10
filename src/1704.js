/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    var map = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,
    };

    var len = s.length;
    return (
        calcVowelNums(s.substr(0, len / 2)) === calcVowelNums(s.substr(len / 2))
    );

    function calcVowelNums(s) {
        var ans = 0;
        for (var ch of s) {
            if (map[ch]) {
                ans++;
            }
        }
        return ans;
    }
};

var s = "book"
s = "textbook"
var ans = halvesAreAlike(s)
console.log(ans)