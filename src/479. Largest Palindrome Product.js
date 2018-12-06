// 求两个n位数乘积为回文数字的最大值，返回 prodcut % 1337

// 思考： 如何减少计算次数
/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    function isPalindrome(s){
        s += ''
        for (var i = 0, j = s.length - 1; i < j; ) {
            if (s[i] != s[j]){
                return false
            }
            i++
            j--
        }
        return true
    }
    var i, j
    i = j = Math.pow(10, n) - 1

    var end = Math.pow(10, n-1)
    var product
    
    for (; j > end; ){
        product = i * j;
        if(isPalindrome(product)){
            break
        }

        if(i == j){
            i--;
        }else {
            j--
        }
    }

    return product % 1337;
};

var res = largestPalindrome(2);