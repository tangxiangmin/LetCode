/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    var [c1, r1, _, c2, r2] = s.split("");

    var ans = [];

    for (var j = c1.charCodeAt(0); j <= c2.charCodeAt(0); ++j) {
        for (var i = Number(r1); i <= Number(r2); ++i) {
            var c = String.fromCharCode(j);
            ans.push(`${c}${i}`);
        }
    }
    return ans;
};

var s = "K1:L2";

var ans = cellsInRange(s);

console.log(ans);
