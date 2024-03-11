

class ListNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

function createLinkListByArr(arr) {
    let next = null
    for (let i = arr.length - 1; i >= 0; --i) {
        const cur = new ListNode(arr[i], next)
        next = cur
    }
    return next
}
function flattenLinkList(head) {
    const ans = []
    const visited = new Map()
    while (head) {
        if (visited.get(head)) {
            throw new Error("链表有环")
            break
        }
        visited.set(head, true)
        ans.push(head.val)
        head = head.next
    }
    return ans
}

module.exports = {
    ListNode,
    createLinkListByArr,
    flattenLinkList
}