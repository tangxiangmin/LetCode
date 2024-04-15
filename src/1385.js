/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

var findTheDistanceValue = function (arr1, arr2, d) {
    const n1 = arr1.length
    const n2 = arr2.length
    let ans = 0
    for (let i = 0; i < n1; ++i) {
        let flag = true
        for (let j = 0; j < n2; ++j) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                flag = false
                break
            }
        }
        if (flag) {
            ans++
        }

    }
    return ans
};

var arr1 = [4, 5, 8], arr2 = [10, 9, 1, 8], d = 2

var res = findTheDistanceValue(arr1, arr2, d)
console.log(res)