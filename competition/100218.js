/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPowers = function (nums, k) {
    const n = nums.length
    let ans = 0
    // 从索引值i开始，选择k个元素
    function dfs(i, len, path) {
        if (len === 0) {
            if (path.length === k) {
                console.log(path)
                ans += clac(path)
            }
            return
        }
        if (i >= n) return

        dfs(i + 1, len - 1, [...path, nums[i]]) // 选择第i个

        dfs(i + 1, len, [...path]) // 不选择第i个
    }

    dfs(0, k, [])

    return ans

    function clac(arr) {
        const n = arr.length
        let ans = Infinity
        for (let i = 0; i < n; ++i) {
            for (let j = i + 1; j < n; ++j) {
                ans = Math.min(Math.abs(arr[i] - arr[j]), ans)
            }
        }
        return ans
    }
};

// 优化回溯代码，还是会超时
var sumOfPowers = function (nums, k) {
    const n = nums.length
    let ans = 0
    const path = []
    function backtrack(i) {
        if (path.length === k) {
            // 这里应该是可以优化的
            ans += clac(path)
            return
        }
        if (path.length > k) return
        if (i >= n) return

        // 不选择当前元素
        backtrack(i + 1)

        // 选择当前元素
        path.push(nums[i])
        backtrack(i + 1)
        path.pop()
    }

    backtrack(0)
    return ans % 1000000007

    function clac(arr) {
        const n = arr.length
        let ans = Infinity
        for (let i = 0; i < n; ++i) {
            for (let j = i + 1; j < n; ++j) {
                ans = Math.min(Math.abs(arr[i] - arr[j]), ans)
            }
        }
        return ans
    }
}
var sumOfPowers = (nums, k) => {
    const mod = 1000000007;
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const map = new Map();

    const dfs = (start, k, energy, last) => {
        if (k === 0) {
            return energy;
        }

        let ans = 0;
        const key = (BigInt(energy) << 18n) | (BigInt(start) << 12n) | (BigInt(k) << 6n) | (BigInt(last + 1));

        if (map.has(key)) return map.get(key);

        for (let i = start; i <= n - k; i++) {
            if (last === -1) {
                ans = (ans + dfs(i + 1, k - 1, energy, i)) % mod;
            } else {
                ans = (ans + dfs(i + 1, k - 1, Math.min(energy, nums[i] - nums[last]), i)) % mod;
            }
        }

        map.set(key, ans);
        return ans;
    };

    return dfs(0, k, Number.MAX_SAFE_INTEGER, -1);
};

var nums = [1, 2, 3, 4], k = 3
// nums = [2, 2], k = 2
// nums = [4, 3, -1], k = 2
// nums = [5300622, 35229352, 8975019, 81468661, 82544636, 9769671, 41040434, 35258243, 10322622, 12777288, 68207101, 26413360, 33296190, 8776859, 63239976], k = 9
nums = [2, 246006, 496910, 752786, 1013762, 1279948, 1551454, 1828436, 2110982, 2399316, 2693558, 2993942, 3300640, 3613766, 3933442, 4259696, 4592656, 4932556, 5279494, 5633522, 5994678, 6363102, 6739028, 7122528, 7513792, 7913044, 8320394, 8736004, 9160062, 9592750, 10034184, 10484602, 10944108, 11412852, 11891048, 12378822, 12876346, 13383746, 13901098, 14428528, 14966126, 15514010, 16072380, 16641300, 17220904, 17811360, 18412850, 19025600, 19649778, 20285440], k = 37
var ans = sumOfPowers(nums, k)
console.log(ans)