/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len = needle.length;
    if (len === 0) {
        return 0;
    }
    for (var i = 0; i < haystack.length; ++i) {
        var j = 0;
        for (; j < len; ++j) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }

        if (j === len) {
            return i;
        }
    }
    return -1;
};

var haystack = "hello", needle = "ll";
haystack = "mississippi", needle = "issip";
console.log(strStr(haystack, needle));
