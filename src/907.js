/**
 * @param {number[]} arr
 * @return {number}
 */

// BF
const MOD = 1000000007;
var sumSubarrayMins = function (arr) {
    let ans = 0
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j <= arr.length; ++j) {
            ans += Math.min(...arr.slice(i, j))
        }
    }
    return ans % MOD
};

// 思路2，对于每一个元素arr[i]，找到他作为子数组最小值时的左边界和右边界，这样就可以统计出arr[i]作为最小值时的子数组个数num，这些子数组的最小值结果和就为 arr[i] * num
var sumSubarrayMins = function(arr) {
    const n = arr.length;
    let monoStack = [];
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        while (monoStack.length !== 0 && arr[i] <= arr[monoStack[monoStack.length - 1]]) {
            monoStack.pop();
        }
        left[i] = i - (monoStack.length === 0 ? -1 : monoStack[monoStack.length - 1]);
        monoStack.push(i);
    }
    monoStack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (monoStack.length !== 0 && arr[i] < arr[monoStack[monoStack.length - 1]]) {
            monoStack.pop();
        }
        right[i] = (monoStack.length === 0 ? n : monoStack[monoStack.length - 1]) - i;
        monoStack.push(i);
    }
    let ans = 0;
    const MOD = 1000000007;
    for (let i = 0; i < n; i++) {
        ans = (ans + left[i] * right[i] * arr[i]) % MOD; 
    }
    return ans;
};




var arr = [3, 1, 2, 4]
// arr = [11, 81, 94, 43, 3]
var ans = sumSubarrayMins(arr)
console.log(ans)