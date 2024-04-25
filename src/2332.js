/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */

// BF模拟
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
    buses.sort((a, b) => a - b)
    passengers.sort((a, b) => a - b)
    const n = buses.length
    let j = 0
    for (let i = 0; i < n - 1; ++i) {
        let cnt = 0
        while (cnt < capacity && j < passengers.length && passengers[j] <= buses[i]) {
            cnt++
            j++
        }
    }
    const last = buses[n - 1]
    let cnt = 0
    while (cnt < capacity && passengers[j] <= last) {
        cnt++
        j++
    }

    // 没有坐满
    if (j === 0) return last

    // 向前插队
    let ans
    if (cnt === capacity) {
        ans = passengers[j - 1]
    } else if (cnt < capacity) {
        ans = Math.max(last, passengers[j - 1])
    }

    for (let i = j - 1; i >= 0; --i) {
        if (passengers[i] < ans) {
            break
        }
        ans--
    }
    return ans
};
var buses = [20, 30, 10], passengers = [19, 13, 26, 4, 25, 11, 21], capacity = 2 // 20
// buses = [2], passengers = [2], capacity = 2 // 1
// buses = [3], passengers = [2], capacity = 3 //3
// buses = [5], passengers = [7, 8], capacity = 1
// buses = [10, 20], passengers = [2, 17, 18, 19], capacity = 2 // 16
var ans = latestTimeCatchTheBus(buses, passengers, capacity)
console.log(ans)
// [2, 3]