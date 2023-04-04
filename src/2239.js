/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {

    var min = Infinity
    var ans = nums[0]
    nums.forEach((num)=>{
        var dis = Math.abs(0 - num)
        if(dis < min){
            min = dis
            ans = num
        }else if(dis === min){
            ans = Math.max(num, ans)
        }
    })
    return ans
};
var nums = [-4,-2,1,4,8]
var ans = findClosestNumber(nums)
console.log(ans)