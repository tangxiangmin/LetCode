/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    var map = {}
    var ans = []
    for (var i = 0; i <= s.length - 10; ++i) {
        var sub = s.substr(i, 10)
        console.log(sub)
        if (!map[sub]) {
            map[sub] = true
        } else if (!ans.includes(sub)) {
            ans.push(sub)
        }
    }
    return ans
};
var s = "AAAAAAAAAAA"
var res = findRepeatedDnaSequences(s)
console.log(res)