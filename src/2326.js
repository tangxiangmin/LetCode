/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    let l = 0
    let r = n - 1
    let t = 0
    let b = m - 1

    let ans = new Array(m).fill(0).map(() => new Array(n).fill(-1))
    let dir = 0 // 0向右、1向下、2向左、3向上
    while (l <= r && t <= b && head) {
        if (dir === 0) {
            for (let i = l; i <= r; ++i) {
                if (!head) {
                    return ans
                }
                ans[t][i] = head.val
                head = head.next

            }
            t++
            dir = 1
        } else if (dir === 1) {
            for (let i = t; i <= b; ++i) {
                if (!head) {
                    return ans
                }
                ans[i][r] = head.val
                head = head.next
            }
            r--
            dir = 2
        } else if (dir === 2) {
            for (let i = r; i >= l; --i) {
                if (!head) {
                    return ans
                }
                ans[b][i] = head.val
                head = head.next
            }
            b--
            dir = 3
        } else {
            for (let i = b; i >= t; --i) {
                if (!head) {
                    return ans
                }
                ans[i][l] = head.val
                head = head.next
            }
            l++
            dir = 0
        }
    }
    return ans
};