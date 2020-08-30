/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 // 思路1： DFS
var findSubsequences = function(nums) {
    var len = nums.length
    var ans = []
    

    for(let i = 1; i < len; ++i){
        dfs(i, [nums[i-1]])
    }
    return ans

    function dfs(i, path){
        if(i >= len) return

        var prev = path[path.length -1]
        var cur = nums[i]
        if(prev <= cur){
            path = path.concat(cur)
            ans.push(path)

            dfs(i+1, path)
        
            
            dfs(i+1, path.slice().splice(1,1))
        }

    }
};

var nums = [4, 6, 7, 7]
var res = findSubsequences(nums)
console.log(res)
