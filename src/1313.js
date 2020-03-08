/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length - 1; i = i + 2) {
        let a = nums[i];
        let b = nums[i + 1];
        ans = ans.concat(new Array(a).fill(b))
    }
    return ans
};


var decompressRLElist = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length - 1; i = i + 2) {
        let a = nums[i];
        let b = nums[i + 1];
        while(a-- > 0){
            ans.push(b)
        }
    }
    return ans
};
