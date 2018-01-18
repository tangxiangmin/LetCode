// 给定一个区间，找到该区间内数字二进制表示法中，1的个数是否为素数，输出满足条件的个数
// 思路：BF
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    function isPrime(num){
        if (num < 2){
            return false
        }
        for (var i = 2; i*i<=num; ++i){
            if(num%i===0){
                return false
            }
        }
        return true
    }

    function toBinary(num) {
        return num.toString(2)
    }

    function countNum(bin) {
        bin += '';
        var res = 0;
        for (var i = 0; i < bin.length; ++i){
            if (bin[i] == 1){
                res++
            }
        }
        return res;
    }

    var res = 0;
    for(var i = L; i<=R; ++i){
        var bin = toBinary(i);
        if (isPrime(countNum(bin))) {
          res++;
        }
    }

    return res;
};

countPrimeSetBits(10, 15);