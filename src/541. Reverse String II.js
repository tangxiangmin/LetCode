/**
 * Created by admin on 2017/4/14.
 */

// 反转字符串
// 给定数字k，反转每2k个字符的前k个字符
// 如果余数小于k，全部反转；如果余数<2k && >=k，同样反转前k个字符

var reverseStr = function(s, k) {
    var len = s.length,
        num = Math.ceil(len/k);

    var res = [];
    for (var i = 0; i < num; ++i){
        var group = [];
        for (var j = 0; j < k; ++j){
            var val = s[i*k + j];
            if (!val){
                break;
            }
            group.push(val);
        }
        if (i%2 === 0){
            group.reverse();
        }
        group = group.join("");
        res.push(group);
    }
    return res.join("")
};

var s = "abcdefg";
console.log(reverseStr(s, 2));