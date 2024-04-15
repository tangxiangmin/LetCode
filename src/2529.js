/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    var pos = 0;
    var neg = 0;
    for (var num of nums) {
        if (num < 0) neg++;
        else if (num > 0) pos++;
    }
    return Math.max(pos, neg);
};

// 可以二分找到分界点
var maximumCount = function (nums) {
    const n = nums.length

    // 找到负数的右边界
    function findR() {
        let l = 0
        let r = n - 1
        if (nums[l] >= 0) return -1
        if (nums[r] < 0) return r
        while (l <= r) {
            const mid = Math.floor((r + l) / 2)
            if (nums[mid] >= 0 && nums[mid - 1] < 0) {
                return mid - 1
            }

            if (nums[mid] >= 0) {
                r = mid - 1
            } else if (nums[mid] < 0) {
                l = mid + 1
            }
        }
        return -1
    }

    // 找到正数的左边界
    function findL() {
        let r = n - 1
        let l = 0
        if (nums[r] <= 0) return n
        if (nums[l] > 0) return l
        while (l <= r) {
            const mid = Math.floor((r + l) / 2)
            if (nums[mid] <= 0 && nums[mid + 1] > 0) {
                return mid + 1
            }
            if (nums[mid] > 0) {
                r = mid - 1
            } else if (nums[mid] <= 0) {
                l = mid + 1
            }
        }
        return n
    }

    const a = findR()
    const b = findL()


    return Math.max(a + 1, n - b)
}

var nums = [-2, -1, -1, 0, 1, 2, 3];
// nums = [-1292, -1238, -947, -571, -338, 475, 885, 984, 1483, 1503] // 5
nums = [5, 20, 66, 1314]
nums = [-2, -1, -1, 0, 0, 0]
var ans = maximumCount(nums);

console.log(ans)