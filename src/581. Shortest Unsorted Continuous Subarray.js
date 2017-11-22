// 给定一个数组，找到只需要升序排列的子数组，然后整个数组都升序排列了
// 思路：从前后分别找到对应起始位置和结束位置
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    var n = nums.length,
        start = -1,
        end = -2,
        min = nums[n-1],
        max = nums[0];

    for (var i = 1; i < n; ++i){
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[n-i-1]);
        if (nums[i] < max){
            end = i;
        }
        if (nums[n-1-i] > min){
            start = n-1-i;
        }
    }

    return end - start + 1;

};

// var arr = [1, 2, 3, 3, 3];
var arr = [2, 6, 4, 8, 10, 9, 15];
// var arr = [1, 2, 3, 4];
// var arr = [2,1];
// var arr = [1, 3, 2, 4, 5];
// var arr = [1,2,3,4]
// var arr = [1,3,2,2,2,6]

var res = findUnsortedSubarray(arr);
console.log(res);