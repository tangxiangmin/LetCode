/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function (skills, k) {
    const n = skills.length
    let dummy = { val: -1, next: null, prev: null }
    let prev = dummy
    for (let i = 0; i < n; ++i) {
        const cur = { val: i, next: null }
        prev.next = cur
        prev = cur
    }
    let cnt = 0
    let last = prev
    k = Math.min(k, skills.length - 1)
    while (true) {
        const a = dummy.next
        const b = a.next
        if (cnt === k) {
            return a.val
        }
        if (skills[a.val] > skills[b.val]) {
            cnt++
            a.next = b.next
            last.next = b
            last = b
        } else {
            cnt = 1
            dummy.next = b
            last.next = a
            last = a
        }
    }
};
var skills = [4, 2, 6, 3, 9], k = 2
skills = [2, 5, 4], k = 3
skills = [11, 13]
k = 164383266
var ans = findWinningPlayer(skills, k)
console.log(ans)