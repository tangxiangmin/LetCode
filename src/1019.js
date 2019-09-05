/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 
/**
 * @param {ListNode} head
 * @return {number[]}
 * 解法一：暴力
 */
var nextLargerNodes2 = function(head) {
    var ans = []
    var cur = head

    while(cur){
        var fast = cur.next
        while(fast && fast.val <= cur.val){
            fast = fast.next
        }
        ans.push(fast ? fast.val : 0)
        cur = cur.next
    }
    return ans
};

/**
 * 解法二：一次遍历
 */
var nextLargerNodes = function(head) {
    var map = new Map() // 保存未找到下一个较大值的元素
    var cur = head
    var ans = []
    let index = 0
    while(cur){
        map.forEach(function(val, index){
            if(cur.val > val){
                ans[index] = cur.val
                // 如果已找到，则移除该元素
                map.delete(index)
            }
        })

        map.set(index, cur.val)
        cur = cur.next
        index++
    }

    map.forEach(function(val, index){
        ans[index] = 0
    })
    return ans
};