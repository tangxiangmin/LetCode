/**
 * Created by admin on 2017/6/13.
 */
// 判断一个正整数能否完全平方，要求不使用内置的sqrt等函数
// 思路：BF或者二分，肯定用二分啦
// 需要注意的是除数取整
var isPerfectSquare = function(num) {
    if (num === 0) return false;
    if (num === 1) return true;

    let low = 0, high = Math.round(num / 2);
    while(low <= high){
        let mid = Math.round((low + high) / 2),
            mult = mid*mid;

        if (mult === num) {
            return true;
        }else if (mult > num) {
            high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
    return false;
};

let test = 4;
console.log(isPerfectSquare(test));