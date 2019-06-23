/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0) {
        return -1;
    }

    var cur = this.head;

    index -= 1;
    while (cur && index >= 0) {
        cur = cur.next;
        index--;
    }

    return cur ? cur.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var next = this.head;
    this.head = {
        val,
        next
    };
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node = this.head;
    if (!node) {
        return this.addAtHead(val);
    }

    while (node && node.next) {
        node = node.next;
    }
    node.next = {
        val,
        next: null
    };
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    var cur = this.head;
    if (index <= 0) {
        return this.addAtHead(val);
    }

    while (cur && index > 1) {
        cur = cur.next;
        index--;
    }
    if (cur) {
        var next = cur.next;
        cur.next = {
            val,
            next
        };
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0) {
        return;
    }
    var cur = this.head;
    if(index === 0){
        this.head = cur ? cur.next : null
        return 
    }   

    while (cur && index > 1) {
        cur = cur.next;
        index--;
    }

    if (cur) {
        cur.next = cur.next ? cur.next.next : null;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

