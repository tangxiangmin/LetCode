/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    const N = 10000001;
    this.f = function(val) {
        return val % N;
    };

    this.data = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    var k = this.f(key);
    this.data[k]  = true;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    var k = this.f(key);
    this.data[k] = false
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    var k = this.f(key);
    return !!this.data[k]
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
