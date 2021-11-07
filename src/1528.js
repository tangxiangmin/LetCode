/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    var ans = []
    for(var i = 0; i < indices.length; ++i){
        var ch = s[i]
        var pos = indices[i]
        ans[pos] = ch
    }
    return ans.join('')
};

var s = "codeleet",
    indices = [4, 5, 6, 7, 0, 2, 1, 3];

var ans = restoreString(s, indices);
console.log(ans);
