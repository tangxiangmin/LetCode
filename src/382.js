/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
    const arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    this.arr = arr
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    const len = this.arr.length
    const idx = Math.floor(Math.random() * len)
    return this.arr[idx].val
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */