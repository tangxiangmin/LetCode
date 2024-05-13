/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function (solution, guess) {
    const n = solution.length
    const m1 = {}
    const m2 = {}
    let a = 0
    let b = 0
    for (let i = 0; i < n; ++i) {
        const c1 = solution[i]
        const c2 = guess[i]
        if (c1 === c2) {
            a++
        } else {
            if (!m1[c1]) m1[c1] = 0
            m1[c1]++

            if (!m2[c2]) m2[c2] = 0
            m2[c2]++
        }
    }

    for (const key in m2) {

        // while (m2[key] > 0) {
        //     m2[key]--
        //     if (m1[key] > 0) {
        //         b++
        //         m1[key]--
        //     }
        // }

        b += Math.min(m1[key] ?? 0, m2[key])
    }

    return [a, b]
};

var solution = "RGRB", guess = "BBBY"
solution = "YBBY", guess = "GYYB"
const ans = masterMind(solution, guess)
console.log(ans)