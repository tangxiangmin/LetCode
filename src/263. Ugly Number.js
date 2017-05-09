/**
 * Created by admin on 2017/5/9.
 */
// 判断一个数字是不是丑数
// 丑数只能被2,3,5整除的
var isUgly = function(num) {
    while(num>=2 && num%2 === 0) num/=2;
    while(num>=3 && num%3 === 0) num/=3;
    while(num>=5 && num%5 === 0) num/=5;
    return num === 1;
};