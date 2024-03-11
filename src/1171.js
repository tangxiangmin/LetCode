/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 思路：感觉可以用前缀和
var removeZeroSumSublists = function (head) {
    let cur = head
    let sum = 0
    const front = new ListNode(-1)
    front.next = head
    let arr = [[0, front]]
    while (cur) {
        sum += cur.val
        arr.push([sum, cur])
        if (sum === 0) {
            front.next = cur.next
            arr = [arr[0]]
        } else {
            const len = arr.length
            for (let i = len - 1; i >= 1; --i) {
                // 当前节点 + 前i个节点的路径值 = sum - arr[i-1][0]
                const [preSum, node] = arr[i - 1]
                if (sum - preSum === 0) {
                    arr = arr.slice(0, i)
                    sum = preSum
                    node.next = cur.next
                    break
                }
            }
        }
        cur = cur.next
    }
    return front.next
};

const { ListNode, createLinkListByArr, flattenLinkList } = require('../libs/linkList')

var head = [1, 2, -3, 3, 1]
// head = [-1, 5, 3, 4, 0]
// head = [1, 1]
// head = [1, 2, 3, -3, -2] // [1,3,6,3,1]
var ans = removeZeroSumSublists(createLinkListByArr(head))
console.log(flattenLinkList(ans))