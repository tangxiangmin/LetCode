/**
 * @param {number[]} nums
 * @return {number}
 */
// BF
var maximumSum = function (nums) {
    nums.sort((a, b) => a - b)
    const bits = nums.map(num => {
        let sum = 0
        let s = num.toString()
        for (const ch of s) {
            sum += +ch
        }
        return sum
    })
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (bits[i] === bits[j]) {
                ans = Math.max(ans, nums[i] + nums[j])
                break
            }
        }
    }
    return ans === 0 ? -1 : ans
};

// 可以使用哈希保存每一个数位的元素，求最大值
var maximumSum = function(nums) {
    const dict = new Map();
    let res = -1;
    for (const i of nums) {
        let digitsSum = 0, temp = i;
        while (temp > 0) {
            digitsSum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        if (dict.has(digitsSum)) {
            res = Math.max(res, dict.get(digitsSum) + i)
            dict.set(digitsSum, Math.max(dict.get(digitsSum), i));
        } else {
            dict.set(digitsSum, i);
        }
    }
    return res;
};