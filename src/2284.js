/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {

    const n = messages.length
    const map = {}
    for (let i = 0; i < n; ++i) {
        const word = messages[i].split(' ')
        const user = senders[i]
        if (!map[user]) map[user] = 0
        map[user] += word.length
    }
    let ans = senders[0]
    for (const key in map) {
        if (map[key] > map[ans]) {
            ans = key
        } else if (map[key] === map[ans] && key > ans) {
            ans = key
        }
    }
    return ans
};