/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let ans = 0
    while(num !== 0){
        ans ++
        if(num % 2 === 0){
            num /= 2
        }else {
            num -= 1
        }
    }
    return ans
};