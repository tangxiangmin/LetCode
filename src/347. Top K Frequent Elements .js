/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let hash = {}
    for(let i = 0; i < nums.length; ++i){
        let key = nums[i]
        if(!hash[key]){
            hash[key] = 0
        }
        hash[key]++
    }

    let ans = []
    for(let key in hash){
        ans.push({
            key,
            val: hash[key]
        })
    }
    return ans.sort((a, b)=>{
        return b.val - a.val
    }).slice(0, k).map(item=>{
        return parseInt(item.key);
    })
};
let nums = [1, 1, 1, 2, 2, 3], k = 2

let res = topKFrequent(nums, k)
console.log(res)