// 判断回文字符串，只考虑字母数字，忽略大小写、标点等
// "A man, a plan, a canal: Panama" true

// 思路：先判断字符是否合法，然后判断是否回文
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isDigitOrLetter(w) {
        return /^[A-Za-z0-9]$/.test(w);
    }

    var len = s.length;
    for (i = 0, j = len - 1; i < j; ) {
        while (s[i] && !isDigitOrLetter(s[i])) {
            i++;
        }
        while (s[j] && !isDigitOrLetter(s[j])) {
            j--;
        }

        if (i < j && s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }
    return true;
};
// var str = "......a....."
var str = ".,"
var res = isPalindrome(str)

console.log(res)