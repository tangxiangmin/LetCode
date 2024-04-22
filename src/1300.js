/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// value的取值范围是 [0, max(arr)]
var findBestValue = function (arr, target) {
    const n = arr.length
    arr.sort((a, b) => a - b)
    let l = 0
    let r = arr[n - 1]

    while (l <= r) {
        const mid = (l + r) >> 1
        if (clac(mid) >= target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    if (Math.abs(clac(l - 1) - target) <= Math.abs(clac(l) - target)) {
        return l - 1
    }
    return l

    function clac(v) {
        let sum = 0
        let i = 0
        for (; i < n; ++i) {
            if (arr[i] < v) {
                sum += arr[i]
            } else {
                break
            }
        }
        sum += (n - i) * v
        return sum
    }

};
var arr = [4, 9, 3], target = 10
// arr = [2, 3, 5], target = 10
// arr = [60864, 25176, 27249, 21296, 20204], target = 56803
arr = [48772, 52931, 14253, 32289, 75263], target = 40876
var ans = findBestValue(arr, target)
console.log(ans)