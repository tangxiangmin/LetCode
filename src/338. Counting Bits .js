/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    function count(n){
        let str = n.toString(2)
        let sum = 0
        for(let i = 0; i < str.length; ++i){
            if(str[i] === '1'){
                sum++
            }
        }
        return sum
    }
    let res = []
    for(let i = 0; i <= sum; ++i){
        res.push(count(i))
    }
    return res
};