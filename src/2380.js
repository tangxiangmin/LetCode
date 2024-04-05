/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {

    let ans = 0
    while (true) {
        if (!s.includes('01')) {
            return ans
        }
        ans++
        s = s.replaceAll('01', '10')
    }
};

var s = "0110101"
var ans= secondsToRemoveOccurrences(s)
console.log(ans)