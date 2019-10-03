/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  var map = {}
  var ans = ''
  words.sort((a, b) => a.length - b.length)
  for (var i = 0; i < words.length; ++i) {
    var word = words[i]
    var len = word.length
    var prev = word.substr(0, len - 1)
    // 保证当前单词的前缀存在
    if (!prev || map[prev]) {
      if (!ans || len > ans.length) {
        ans = word
      } else {
        ans = ans > word ? word : ans
      }
      map[word] = true
    }
  }
  return ans
};

var words = ["w", "wo", "wor", "worl", "world"]
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// words = ["ts", "e", "x", "pbhj", "opto", "xhigy", "erikz", "pbh", "opt", "erikzb", "eri", "erik", "xlye", "xhig", "optoj", "optoje", "xly", "pb", "xhi", "x", "o"]

var res = longestWord(words)
console.log(res)