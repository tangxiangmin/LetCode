/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 思路1：hash
var singleNumbers = function(nums) {
    var map = {}
    for(var i = 0; i < nums.length; ++i){
        var ch = nums[i]
        if(!map[ch]) map[ch] = 0
        map[ch]++
    }
    var ans = []
    for(var key in map){
        if(map[key] == 1) ans.push(+key)
    }
    return ans
};

// 思路二：由于题目要求时间O(n)，空间O(1)
var singleNumbers = function(nums) {

}