
// 给定一个字符串数组，找多最长的公共前缀
// 思路，找到两个字符串的最长公共前缀，然后遍历即可

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    function getCommonPrefix(s1, s2){
        var prefix = "";
        for (var i = 0; i < s1.length; ++i){
            if (s1[i] === s2[i]){
                prefix += s1[i];
            }else {
                break
            }
        }
        return prefix;
    }

    var res = strs[0] || "";
    for (var i = 1; i < strs.length; ++i){
        res = getCommonPrefix(res, strs[i]);
    }

    return res;

};

var arr = [];

longestCommonPrefix(arr);
