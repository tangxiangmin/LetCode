// 找到给定范围内可自除的整数
// 自除的含义：128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    function isSelfDivide(num) {
        let str = num.toString();

        let flag = true;
        for (var i = 0; i < str.length; ++i) {
            var digit = str[i];
            if (digit == 0 || num%digit != 0){
                flag = false;
                break
            }
        }

        return flag
    }

    let res = []
    for(var i = left; i <= right; ++i){
        if (isSelfDivide(i)){
            res.push(i)
        }
    }
    return res;
};

let res = selfDividingNumbers(1, 22);