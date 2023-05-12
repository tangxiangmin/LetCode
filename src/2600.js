/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    var sum = 0
    while(k > 0){
        if(numOnes) {
            numOnes--
            sum++
        }else if(numZeros) {
            numZeros--
        }else if(numNegOnes){
            numNegOnes--
            sum--
        }
        k--
    }
    return sum
};

var numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2
numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4
var ans = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k)
console.log(ans)