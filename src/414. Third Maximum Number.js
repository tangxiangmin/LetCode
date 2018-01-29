// 返回第三大的数字，如果不存在则返回最大的数字，要求时间复杂度O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    function findMax(flag) {
        var max = -Infinity;
        for(var i = 0; i < nums.length; ++i){
            var item = nums[i]
            if (item > max) {
                if (typeof flag == 'undefined') {
                    max = item;
                }else if(flag > item) {
                    max = item;
                }
            }
        }
        return max
    }

    var max = findMax();
    var second = findMax(max);
    var thrid = findMax(second);

    return thrid === -Infinity ? max : thrid;
};

var arr = [1, 2, -2147483648];
var res = thirdMax(arr);
console.log(res)

