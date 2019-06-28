/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.data = {}
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.data[key] = val
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    var data = this.data
    var ans = 0
    for (var key in data) {
        if(data.hasOwnProperty(key) && key.indexOf(prefix) === 0){
            ans += data[key]
        }
    }
    return ans
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
