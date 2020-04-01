/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let ans = []
    let num = Math.pow(10, n)
    for(var i = 1; i < num; ++i){
        ans.push(i)
    }
    return ans
};