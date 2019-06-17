/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = strs[0] || "";
    for (var i = 1; i < strs.length; ++i) {
        var str = strs[i];
        var tmp = "";
        for (var j = 0; j < prefix.length; ++j) {
            if (prefix[j] !== str[j]) {
                prefix = tmp;
                break;
            }
            tmp += prefix[j];
        }
    }
    return prefix;
};

var arr = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(arr));
