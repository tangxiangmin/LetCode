/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let maxTime = 0;
    let ans = "";

    for (let i = 0; i < keysPressed.length; ++i) {
        const ch = keysPressed[i];
        const time =
            i === 0 ? releaseTimes[i] : releaseTimes[i] - releaseTimes[i - 1];

        if(time > maxTime) {
            maxTime = time
            ans = ch
        }else if(time === maxTime && ans < ch){
            ans = ch
        }
    }
    return ans
};
