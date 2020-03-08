/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let chars = n.toString().split('')
    let product = chars.reduce((acc, ch)=>{
        return acc * ch
    },1)
    let sum = chars.reduce((acc, ch)=>{
        return acc + parseInt(ch)
    },0)
    return product - sum
};