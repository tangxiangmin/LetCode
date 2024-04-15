/**
 * @param {number[]} places
 * @return {boolean}
 */
var checkDynasty = function (places) {
    places.sort((a, b) => a - b)
    console.log(places)

    let i = 0
    let cnt = 0
    const n = places.length
    while (i < n && places[i] === 0) {
        i++
        cnt++
    }

    while (i < n - 1) {
        let cur = places[i]
        if (cur == places[i + 1]) return false
        while (i < n - 1 && cur + 1 < places[i + 1]) {
            if (cnt === 0) {
                return false
            }
            cnt--
            cur++
        }
        i++
    }
    return true
};
var places = [0, 6, 9, 0, 7]
places = [7, 8, 9, 10, 11]
places = [10, 11, 0, 12, 6]
// places = [9, 0, 6, 0, 10]
var ans = checkDynasty(places)
console.log(ans)