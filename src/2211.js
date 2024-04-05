/**
 * @param {string} directions
 * @return {number}
 */
// 模拟一下,但是会超时
var countCollisions = function (directions) {
    directions = directions.split('')
    const n = directions.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        const cur = directions[i]
        if (cur === 'R') {
            let j = i + 1
            while (j < n && directions[j] === 'R') {
                j++
            }

            if (j < n) {
                ans += directions[j] === 'S' ? 1 : 2
                directions[j] = 'S'
                directions[i] = 'S'
            }

        } else if (cur === "L") {
            let j = i - 1
            while (j >= 0 && directions[j] === 'L') {
                j--
            }
            if (j >= 0) {
                ans += directions[j] === 'S' ? 1 : 2
                directions[i] = 'S'
                directions[j] = 'S'
            }

        }
    }
    return ans
};
var countCollisions = function (directions = '') {
    let l = 0
    let r = directions.length - 1
    while (directions[l] === 'L') {
        l++
    }
    while (directions[r] === 'R') {
        r--
    }
    let ans = 0
    for (let i = l; i <= r; ++i) {
        if (directions[i] !== 'S') {
            ans++
        }
    }
    return ans
}
var directions = "RLRSLL"
// directions = "LLRR"
// directions = "LLRLRLLSLRLLSLSSSS"
// directions = "SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR"
directions = "LSSSLLSSSSLRRSLLLSLSLRRLLLLLRSSRSRRSLLLSSS"

var ans = countCollisions(directions)
console.log(ans)