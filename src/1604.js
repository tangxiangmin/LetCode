/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {

    const map = keyName.reduce((acc, row, index) => {
        if (!acc[row]) acc[row] = []
        acc[row].push(parse2Min(keyTime[index]))
        return acc
    }, {})

    const ans = []
    for (const name in map) {
        if (check(map[name])) {
            ans.push(name)
        }
    }
    return ans.sort()

    function check(arr) {
        arr.sort((a, b) => a - b)
        const n = arr.length
        for (let i = 0; i < n - 2; ++i) {
            let a = arr[i]
            let c = arr[i + 2]
            if (c - a <= 60) {
                return true
            }
        }
        return false
    }
    function parse2Min(str) {
        const [h, r] = str.split(':')
        return h * 60 + Number(r)
    }
};
var keyName = ["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"], keyTime = ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"]
var ans = alertNames(keyName, keyTime)
console.log(ans)