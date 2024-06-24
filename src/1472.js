/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.list = [homepage]
    this.currentIndex = 0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.list = this.list.slice(0, this.currentIndex + 1)
    this.currentIndex++
    this.list.push(url)
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    this.currentIndex = Math.max(0, this.currentIndex - steps)
    return this.list[this.currentIndex]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    this.currentIndex = Math.min(this.list.length - 1, this.currentIndex + steps)
    return this.list[this.currentIndex]
};


var { runClass } = require('../libs/klass')
var actions = ["BrowserHistory", "visit", "visit", "visit", "back", "back", "forward", "visit", "forward", "back", "back"],
    params = [["leetcode.com"], ["google.com"], ["facebook.com"], ["youtube.com"], [1], [1], [1], ["linkedin.com"], [2], [2], [7]]

runClass(BrowserHistory, actions, params)