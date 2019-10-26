/**
 * @param {number[]} nums
 * @return {number}
 */
// 如果不限制空间复杂度，则使用hash或先排序的方式解决
// 由于本题限制空间复杂度O(1)，不能修改数组，参考题解 弗洛伊德的乌龟和兔子（循环检测）
// 对于每队索引值i和值v，我们可以转换为索引值nums[i]处的值为nums[nums[i]]，如果元素值x重复，则对于x而言，同时多个nums[x]满足，问题转换为求环
var findDuplicate = function (nums) {
    var s = nums[0]
    var f = nums[0]
    // 找到相遇的地方
    do {
        s = nums[s];
        f = nums[nums[f]];
    } while (s != f);

    // 找到入环的点
    var p1 = nums[0]
    var p2 = s
    while (p1 !== p2) {
        p1 = nums[p1]
        p2 = nums[p2]
    }
    return p1
};
var nums = [1, 3, 4, 2, 2]
var res = findDuplicate(nums)
console.log(res)