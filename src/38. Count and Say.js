/**
 * Created by admin on 2017/7/9.
 */
// 这个题有点懵啊
// 终于理解了题意，连续相同的数字就以数量代替，然后返回新的数字，
// 思路：递归啊
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }

    var prev =  countAndSay(n-1),
        count =  1,
        res = "";
    for (var i = 1, len = prev.length; i <= len; ++i){
        if (prev[i] === prev[i-1]){
            count++;
        }else {
            res += count + "" + prev[i-1];
            count = 1;
        }
    }
    return res;
};

var test = 4;
console.log(countAndSay(test));