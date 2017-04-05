/**
 * https://leetcode.com/problems/next-greater-element-i/#/description
 */
var nextGreaterElement = function(findNums, nums) {
    var len = nums.length;
    function findNextMax(val){
        var index = nums.indexOf(val);
        for (var i = index; i < len; ++i){
            var maxNum = nums[i];
            if (maxNum > val) {
                return maxNum;
            }
        }
        return -1;
    }

    var res = findNums.map((val)=>{
        return findNextMax(val);

    })


    return res;
};