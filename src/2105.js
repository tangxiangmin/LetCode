/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
    let l = 0
    let r = plants.length - 1
    let ans = 0
    let a = capacityA
    let b = capacityB
    while (l <= r) {
        if (l === r) {
            const max = Math.max(a, b)
            ans += max >= plants[l] ? 0 : 1
            break
        }
        if (a < plants[l]) {
            a = capacityA
            ans++
        }
        a -= plants[l]
        if (b < plants[r]) {
            b = capacityB
            ans++
        }
        b -= plants[r]
        l++
        r--
    }
    return ans

};

var plants = [2, 2, 3, 3], capacityA = 5, capacityB = 5
plants = [2,2,3,3], capacityA = 3, capacityB = 4
plants = [5], capacityA = 10, capacityB = 8
var ans = minimumRefill(plants, capacityA, capacityB)
console.log(ans)