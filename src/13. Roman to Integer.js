/**
 * Created by admin on 2017/4/12.
 */

// 罗马数字转数字
// 专门去查了一下罗马数字的表示方法：
// 罗马数字采用七个罗马字母作数字、即Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）
// 相同的数字连写，所表示的数等于这些数字相加得到的数，如 Ⅲ=3；
// 小的数字在大的数字的右边，所表示的数等于这些数字相加得到的数，如 Ⅷ=8、Ⅻ=12；
// 小的数字（限于 Ⅰ、X 和 C）在大的数字的左边，所表示的数等于大数减小数得到的数，如 Ⅳ=4、Ⅸ=9
// IIV=5所以只是相邻字符的比较，需要注意的是罗马数字不是位置化数字系统，也就是说一个数字有多种写法
// 在一个数的上面画一条横线，表示这个数增值 1,000 倍，由于题目输入为1~3999所以不考虑这一条规则了

var romanToInt = function(s) {
    var map = {
        "I": 1,
        "X": 10,
        "C": 100,
        "M": 1000,
        "V": 5,
        "L": 50,
        "D": 500
    };

    var sum = 0;
    for (var i = 0, len = s.length; i < len; ++i){
        var cur = map[s[i]],
            next = map[s[i+1]];

        if (next && cur < next){
            cur = - cur;
        }
        sum += cur;
    }
    return sum;
};

console.log(romanToInt("IVI"));