/**
 * Initialize your data structure here.
 */
var Twitter = function () {
    this.data = []
    this.followMap = {}
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.data.push({ userId, tweetId })
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let list = []
    let data = this.data
    let followerList = this.followMap[userId] || []
    for (var i = data.length - 1; i >= 0; --i) {
        var cur = data[i]
        if (cur.userId === userId || followerList.includes(cur.userId)) {
            list.push(cur.tweetId)
        }
        if (list.length === 10) {
            break
        }
    }
    return list
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.followMap[followerId]) {
        this.followMap[followerId] = []
    }
    this.followMap[followerId].push(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    let list = this.followMap[followerId] || []
    let idx = list.indexOf(followeeId)
    if (idx > -1) {
        this.followMap[followerId].splice(idx, 1)
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */