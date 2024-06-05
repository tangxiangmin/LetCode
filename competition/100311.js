/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {

    meetings.sort((a, b) => {
        return a[0] - b[0]
    })

    let val = 0 // 被开会占据的天数

    // console.log(JSON.stringify(meetings))
    const n = meetings.length
    let prevEnd = 0
    for (let i = 0; i < n;) {
        let [start, end] = meetings[i]
        let j = i + 1

        while (j < n && meetings[j][0] === start) {
            end = Math.max(end, meetings[j][1])
            j++
        }
        start = Math.max(start, prevEnd + 1)
        prevEnd = Math.max(prevEnd, end)
        i = j
        if (start <= end) {
            val += end - start + 1
        }
    }
    return days - val
};
var days = 10, meetings = [[5, 7], [1, 3], [9, 10]]
// days = 5, meetings = [[2, 4], [1, 3]]
// days = 57, meetings = [[3, 49], [23, 44], [21, 56], [26, 55], [23, 52], [2, 9], [1, 48], [3, 31]]
var ans = countDays(days, meetings)
console.log(ans)