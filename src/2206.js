/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    var map = {}
    for(var num of nums){
        if(!map[num]) {
            map[num] = 0
        }
        map[num]++
    }
    return Object.values(map).every(row=>{
        return row % 2 ===0
    })
};

var nums = [3,2,3,2,2,2]
var ans = divideArray(nums)

console.log(ans)