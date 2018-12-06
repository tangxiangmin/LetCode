/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = {
        next: null
    }
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index){
    let count = 0
    let node = this.head.next;

    if(index === -1){
        return this.head
    }

    while (count < index && node) {
        node = node.next;
        count++;
    }
    return node;

}
MyLinkedList.prototype.get = function (index) {
    let node = this.getNode(index)

    if (node){
        return node.val;
    }else {
        return -1
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let head = this.head
    let next = head.next
    this.head.next = { val: val, next: next };
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = this.head
    while (node.next) {
        node = node.next;
    }
    node.next = { val, next: null };
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let target = this.getNode(index - 1);
    if (target){
        let next = target.next
        target.next = { val, next }
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    let prev = this.getNode(index-1);
    if (prev){
        let target = prev.next
        if (target){
            prev.next = target.next
        }else {
            prev.next = null
        }
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */