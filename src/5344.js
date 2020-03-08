/**
 * @param {number[]} nums
 * @return {number[]}
 */
// nums = [8,1,2,2,3] => [4,0,1,1,3]

 // 思路一：bf
var smallerNumbersThanCurrent = function(nums) {
    return nums.map((num, i)=>{
        let ans = []
        nums.forEach((n, j)=>{
            if(i !==j && n < num){
                ans.push(n)
            }
        })
        return ans.length
    })
};