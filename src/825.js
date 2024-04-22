/**
 * @param {number[]} ages
 * @return {number}
 */
// BF试试
var numFriendRequests = function (ages) {
    const n = ages.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (!check(i, j)) {
                ans++
            }
        }
    }
    return ans

    function check(x, y) {
        if (x === y) return true
        return ages[y] <= 0.5 * ages[x] + 7 || ages[y] > ages[x] || (ages[y] > 100 && ages[x] < 100)
    }
};

// 有一条 ages[y] > ages[x]的限制，看起来可以先升序排列，对于ages[i]而言，只会向他左边符合条件的元素中筛选出符合条件的
var numFriendRequests = function (ages) {
    const n = ages.length

    ages.sort((a, b) => a - b)
    let ans = 0
    let left = 0
    let right = 0
    for (const age of ages) {
        if (age < 15) continue
        while (ages[left] <= 0.5 * age + 7) {
            ++left;
        }
        while (right + 1 < n && ages[right + 1] <= age) {
            ++right;
        }
        ans += right - left;
    }
    return ans
};
var ages = [16, 16, 16] // 2
// ages = [16, 17, 18] // 2
ages = [20, 30, 100, 100, 110, 120] // 3
ages = [73, 106, 39, 6, 26, 15, 30, 100, 71, 35, 46, 112, 6, 60, 110] //2
ages = [6, 6, 15, 26, 30, 35, 39, 46, 60, 71, 73, 100, 106, 110, 112]
var ans = numFriendRequests(ages)
console.log(ans)