// 倒序打印链表

function Node(val) {
    this.val = val;
    this.next = null;
}

// 思路1，通过额外的数据结构依次保存每个节点，然后倒序输出，空间O(n)，时间O(n)
function solution(head) {
    var arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    // 栈先进后出，倒序打印
    while(arr.length){
        var node = arr.pop()
        console.log(node.val)
    }
}
// 思路2，基于思路1的栈实现，可以使用递归，通过系统的函数调用栈来打印，实现起来非常简洁，但是需要注意递归过深时额外的系统开销
function solution(head){
    if(!head) return 
    solution(head.next)
    console.log(head.val)
}