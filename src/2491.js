/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {

    skill.sort((a, b) => a - b)

    let l = 0
    let r = skill.length - 1
    let sum = skill[l] + skill[r]
    let ans = 0
    while (l < r) {
        if (skill[l] + skill[r] !== sum) return -1
        ans += skill[l] * skill[r]
        l++
        r--
    }
    return ans
};