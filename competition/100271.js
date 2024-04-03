/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 与100272题目一样，但是数据范围大了很多，bf不行
// 使用滑动窗口，但是 按位或运算不可逆，删除窗口左侧的元素，需要设计一个好一点的规则
function minimumSubarrayLength(nums, k) {
    if (k === 0) return 1;

    const n = nums.length;
    let l = 0, r = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    const res = new Array(30).fill(0);

    const add = (x) => {
        for (let i = 0; i < 30; i++) {
            if ((x & (1 << i)) !== 0) res[i]++;
        }
    };

    const del = (x) => {
        for (let i = 0; i < 30; i++) {
            if ((x & (1 << i)) !== 0) res[i]--;
        }
    };

    const resIsBigger = (k) => {
        let sum = 0;
        for (let i = 0; i < 30; i++) {
            if (res[i] > 0) sum += (1 << i);
        }
        return sum >= k;
    };

    while (r < n) {
        add(nums[r]);
        r++;
        while (l < n && resIsBigger(k)) {
            minLen = Math.min(minLen, r - l);
            del(nums[l]);
            l++;
        }
    }

    return minLen === Number.MAX_SAFE_INTEGER ? -1 : minLen;
}
var nums = [1, 2, 3], k = 2
// nums = [2, 1, 8], k = 10
nums = [1, 2], k = 0
// nums = [1, 2, 32, 21], k = 55 // 3
nums = [2, 32, 21, 1], k = 55 // 3
nums = [2, 32, 27, 1], k = 59 // 2
var ans = minimumSubarrayLength(nums, k)
console.log(ans)