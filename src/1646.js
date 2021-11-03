/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    if (n === 0) return 0;

    var nums = [0, 1];
    for (let i = 1; i <= n / 2; ++i) {
        if (2 * i >= 2 && 2 * i <= n) {
            nums[2 * i] = nums[i];
        }

        if (2 * i + 1 >= 2 && 2 * i + 1 <= n) {
            nums[2 * i + 1] = nums[i] + nums[i + 1];
        }
    }
    return Math.max.apply(null, nums);
};

let n = 3;
const ans = getMaximumGenerated(n);
console.log(ans);
