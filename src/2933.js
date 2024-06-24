/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function (access_times) {
    const map = {}
    for (const [name, time] of access_times) {
        if (!map[name]) {
            map[name] = []
        }
        map[name].push(time)
    }
    const ans = []
    for (const name in map) {
        const times = map[name]
        if (check(times)) {
            ans.push(name)
        }
    }
    return ans

    // function check(times) {
    //     times.sort()
    //     const n = times.length
    //     for (let i = 0; i < n; ++i) {
    //         let start = parse(times[i])
    //         let cnt = 0
    //         for (let j = i + 1; j < n; ++j) {
    //             const end = parse(times[j])
    //             if (end - start < 60) {
    //                 cnt++
    //                 if (cnt >= 2) {
    //                     return true
    //                 }
    //             } else {
    //                 break
    //             }

    //         }
    //     }
    // }
    function check(times) {
        times.sort()
        const n = times.length
        const mins = times.map(time => parse(time))
        for (let i = 0; i < n - 2; ++i) {
            if (mins[i + 2] - mins[i] < 60) {
                return true
            }
        }
        return false
    }

    function parse(time) {
        const h = +time.slice(0, 2)
        const m = +time.slice(2)

        return h * 60 + m
    }
};
var access_times = [["a", "0549"], ["b", "0457"], ["a", "0532"], ["a", "0621"], ["b", "0540"]]
access_times = [["d", "0002"], ["c", "0808"], ["c", "0829"], ["e", "0215"], ["d", "1508"], ["d", "1444"], ["d", "1410"], ["c", "0809"]]
var ans = findHighAccessEmployees(access_times)
console.log(ans)