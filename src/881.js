/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit
// 思路：想到的第一个思路就是先排序，将不超过limit的较大和较小值进行组合，统计总共的值
// [1,2,3,4,5], 
// limit = 6, 则ans = [1,5] + [2,4] + [3] = 3
// limit = 8, 则ans = [1,5]+[2,4]+[3] = 3, 
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    var i = 0
    var j = people.length - 1
    var ans = 0
    while (i <= j) {
        ans++
        // 如果最重的人只能与最轻的人都无法在一条船上，则他只能单独用一条船，j--
        // 否则他们可以在一条船上，i++, j--
        if (people[i] + people[j] <= limit) {
            i++
        }
        j--
    }
    return ans
};

var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    let r = people.length - 1
    let l = 0
    let ans = 0

    while (l <= r) {
        const sum = people[l] + people[r]
        if (sum > limit) {
            r--
        } else if (sum <= limit) {
            l++
            r--
        }
        ans++

    }
    return ans
};
var people = [1, 2], limit = 3
var ans = numRescueBoats(people, limit)
console.log(ans)