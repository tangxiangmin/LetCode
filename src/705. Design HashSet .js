// 实现hashset

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.keys = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    let index = this.keys.indexOf(key)
    if(index > -1) {
    }else {
        this.keys.push(key)
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let index = this.keys.indexOf(key)
    if(index > -1){
        this.keys.splice(index, 1); 
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let index = this.keys.indexOf(key)
    return index > -1
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */