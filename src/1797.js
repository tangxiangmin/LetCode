/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
    this.timeToLive = timeToLive
    this.map = new Map()

};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
    this.map.set(tokenId, currentTime + this.timeToLive)
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
    if (!this.map.has(tokenId)) return
    const target = this.map.get(tokenId)
    if (!target) return
    if (target <= currentTime) return
    this.map.set(tokenId, currentTime + this.timeToLive)
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
    let ans = 0
    this.map.forEach((target, key) => {
        if (target > currentTime) {
            ans++
        }
    });
    return ans
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */

const { runClass } = require('../libs/klass')
var actions = ["AuthenticationManager", "renew", "generate", "countUnexpiredTokens", "generate", "renew", "renew", "countUnexpiredTokens"]
var params = [[5], ["aaa", 1], ["aaa", 2], [6], ["bbb", 7], ["aaa", 8], ["bbb", 10], [15]]
runClass(AuthenticationManager, actions, params)