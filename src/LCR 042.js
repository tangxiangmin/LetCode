
var RecentCounter = function () {
    this.arr = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {

    while (this.arr.length && this.arr[0] < t - 3000) {
        this.arr.shift()
    }

    this.arr.push(t)

    return this.arr.length
};
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const { runClass } = require('../libs/klass')
var actions = ["RecentCounter", "ping", "ping", "ping", "ping"], params = [[], [1], [100], [3001], [3002]]
runClass(RecentCounter, actions, params)