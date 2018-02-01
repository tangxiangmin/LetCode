// 统计小于n的素数个数

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    function isPrime(n) {
        for(var i = 2; i < Math.sqrt(n); ++i){
            if(n % i === 0){
                return false 
            }
        }
        return true
    }

    console.log(isPrime(2))
    var res = 0
    for (var i = 2; i < n; ++i){
        if (isPrime(i)){
            res++
        }
    }
    return res
};
countPrimes();