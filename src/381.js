/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.data = {}
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    if(!this.data[val]) {
        this.data[val]=1
        return true
    }
    this.data[val]++
    return false
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if( this.data[val]){
        this.data[val]--
        return true
    }
    return false
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    var sum = 0
    for(var key in this.data){
        var num = this.data[key]
        sum += num
    }
    let idx = Math.floor(Math.random()*sum) + 1

    sum = 0
    for(var key in this.data){
        var num = this.data[key]
        sum += num
        if(sum >= idx){
            return key
        }
    }
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */