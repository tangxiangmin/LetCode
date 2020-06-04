/**
 * https://leetcode.com/problems/single-number/#/description
 */
var singleNumber = function(nums) {
    // 题目要求时间复杂度为O(n)，空间复杂度为O(1)，这种方式行不通
    // for (var i = 0, len = arr.length; i < len; ++i){
    //     if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
    //         return arr[i];
    //     }
    // }

    // 运用异或解决，异或的的性质
    // 1：交换律a ^ b = b ^ a，
    // 2：0 ^ a = a

    // 解决办法：
    // 利用交换律可以将数组假想成相同元素全部相邻，将所有元素依次做异或操作
    // 相同元素异或为0，最后剩余的元素即为单一数字
    var elem = 0;
    for (var i = 0, len = nums.length; i < len; i++) {
        elem = elem ^ nums[i];
    }
    return elem;
};