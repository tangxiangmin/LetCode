/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    var map = {}
    for(var num of nums){
        if(!map[num]) map[num] = 0
        map[num]++
    }

    function dfs(map, sum, k){

    }

};

var nums = [4, 3, 2, 3, 5, 2, 1], k = 4
var ans = canPartitionKSubsets(nums,k)
console.log(ans)