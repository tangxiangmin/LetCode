/**
 * @param {string} characters
 * @param {number} combinationLength
 */

// 本质上是构建下一个比当前元素大的字符串
var CombinationIterator = function (characters, combinationLength) {
    this.characters = characters.split('').sort()
    const cur = this.characters.slice(0, combinationLength).join('')
    this.cur = cur
    this.combinationLength = combinationLength
};

/**
 * @return {string}
 */

CombinationIterator.prototype.buildNext = function () {
    const { characters, cur, combinationLength } = this
    for (let i = 0; i < combinationLength; ++i) {
        // todo

    }

}

CombinationIterator.prototype.next = function () {

    const val = this.cur
    this.val = this.buildNext()
    return val


};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
    return !!this.cur
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */