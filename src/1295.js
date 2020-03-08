/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.filter(num=>{
        return digitNum(num) % 2 == 0
    }).length

    function digitNum(n){
        let s = 0
        while(n){
            n = Math.floor(n / 10)
            s++
        }
        return s
    }
};