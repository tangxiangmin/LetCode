// 找到字典中可被其他单词组成的最长单词，返回字典排序（abc这样的排序）最小的那个单词

// 思路：先找到符合条田的最长单词，然后返回字典排序
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort((a, b) => {
    return a.length - b.length;
  });

  // 判断是否符合条件
  function isBuilt(str, sub) {
    let index = str.indexOf(sub);
    return index > -1 && index === str.lastIndexOf(sub);
  }

  function findLongestWord(words) {
    var len = words.length,
      res = [],
      matchLength = 0;

    for (var i = len - 1; i > 0; --i) {
      for (var j = i - 1; j >= 0; --j) {
        var sub = words[j];
        if (isBuilt(words[i], sub)) {
          if (matchLength == sub.length) {
            res.push(words[i]);
          } else if (sub.length > matchLength) {
            matchLength = sub.length;
            res = [words[i]];
          }
          break
        }
      }
      if (res.length && words[i].length != words[i - 1].length) {
        break;
      }
    }
    return res;
  }

  let res = findLongestWord(words);
  // 实现字典排序
  function findSmallestWord(arr) {
    var wordLength = arr[0].length;
    for (var i = 0; i < wordLength; ++i) {
      if (arr.length == 1) {
        break;
      }

      var smallLetter = "z";
      var res = [];
      for (var j = 0; j < arr.length; ++j) {
        var word = arr[j];
        if (word[i] < smallLetter) {
          smallLetter = word[i];
          res = [word];
        } else if (word[i] == smallLetter) {
          res.push(word);
        }
      }
      if (res.length) {
        arr = res;
      }
    }
    return arr[0];
  }

  if (res.length) {
    var smallestWord = findSmallestWord(res);
    return smallestWord;
  } else {
    return "";
  }
};

// var arr = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
var arr = [
  "yo",
  "ew",
  "fc",
  "zrc",
  "yodn",
  "fcm",
  "qm",
  "qmo",
  "fcmz",
  "z",
  "ewq",
  "yod",
  "ewqz",
  "y"
];
// var arr = [
//   "m",
//   "mo",
//   "moc",
//   "moch",
//   "mocha",
//   "l",
//   "la",
//   "lat",
//   "latt",
//   "latte",
//   "c",
//   "ca",
//   "cat"
// ];
var res = longestWord(arr);
console.log(res);
