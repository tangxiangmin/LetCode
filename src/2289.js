/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1：模拟，最后几个测试用例会超时
var totalSteps = function (nums) {
    let ans = 0
    while (true) {
        let arr = [nums[0]]
        for (let i = 1; i < nums.length; ++i) {
            if (nums[i - 1] <= nums[i]) {
                arr.push(nums[i])
            }
        }
        if (arr.length === nums.length) {
            break
        }
        ans++
        nums = arr
    }
    return ans
};
// 思路2,第一个元素nums[0]肯定是在最后的数组中，对于每个num[i-1]>num[i]的地方，向后找到第一个不需要移除的元素，统计长度，最后取最长的作为结果
var totalSteps = function (nums) {
    let ans = 0;
    let st = [];
    for (let num of nums) {
        let maxT = 0;
        while (st.length > 0 && st[st.length - 1][0] <= num)
            maxT = Math.max(maxT, st.pop()[1]);
        maxT = st.length === 0 ? 0 : maxT + 1;
        ans = Math.max(ans, maxT);
        st.push([num, maxT]);
    }
    return ans;
}
var nums = [5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11]
var ans = totalSteps(nums)
console.log(ans)