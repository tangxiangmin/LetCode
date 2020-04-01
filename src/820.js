/**
 * @param {string[]} words
 * @return {number}
 */
// 思路：尽可能把相同后缀的字符串放在一起，求最小的字符串结果
var minimumLengthEncoding = function(words) {
    let arr = words.map(item => {
        var ans = "";
        for (var i = item.length - 1; i >= 0; --i) {
            ans += item[i];
        }
        return ans;
    });

    arr.sort();

    var res = 0;
    for (var i = 0; i < arr.length-1; ++i) {
        var len = arr[i].length;
        // 排序后只需要比较相邻的字符串
        if (arr[i] == arr[i + 1].substr(0, len)) continue;
        // + 1表示#号
        res += len + 1; 
    }
    return res + arr[arr.length - 1].length + 1;
};

var words = ["time", "me", "bell"];
// 输出S = "time#bell#" ， indexes = [0, 2, 5] 。
var res = minimumLengthEncoding(words);
console.log(res);
