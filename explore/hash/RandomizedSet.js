/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.data = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    var data = this.data;
    if (data[val] === undefined) {
        data[val] = val;
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    var data = this.data;
    if (data[val] === undefined) {
        return false;
    }
    delete data[val];
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var keys = Object.keys(this.data);
    var idx = Math.floor(Math.random() * keys.length);
    var key = keys[idx]
    return this.data[key]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
