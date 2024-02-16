/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    var ans = s.replace(/AB|CD/, '')
    if (ans === s) {
        return ans.length
    }
    return minLength(ans)
};

var s = "ABFCACDB"
var ans = minLength(s)
console.log(ans)