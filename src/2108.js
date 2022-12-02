/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    return words.find(isPalindrome) || ''
    function isPalindrome(word) {
        var l = 0;
        var r = word.length - 1;
        while (l < r) {
            if (word[l] !== word[r]) return false;
            l++;
            r--;
        }
        return true;
    }
};

var words = ["abc", "car", "ada", "racecar", "cool"];
words = ["notapalindrome","racecar"]
var ans = firstPalindrome(words);
console.log(ans);
