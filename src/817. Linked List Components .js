/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
    let ans = 0
    let currentLine = []
    while(head){
        let val = head.val
        if(G.indexOf(val) > -1){
            currentLine.push(head)
        }else {
            console.log(currentLine);
            if(currentLine.length){
                ans++
                currentLine = []
            }
        }
        head = head.next
    }
    if (currentLine.length) {
        ans++
        currentLine = []
    }
    return ans
};