/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// 思路，使用快慢指针
var shuffle = function(nums, n) {
    var arr = []
    var i = 0
    var flag = true
    
    while(arr.length < nums.length){
        if(flag) {
            arr.push(nums[i])
        }else {
            arr.push(nums[i+n])
            i++
        }
        flag = !flag
    }
    return arr
};
var nums = [2,5,1,3,4,7], n = 3
var res= shuffle(nums, n)
console.log(res)