/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
// 思路，使用递归
var deserialize = function (s) {
    if (!s) return false
    var ans = new NestedInteger()
    if (s[0] === '[') {
        s = s.slice(1, s.length - 1)
    } else {
        ans.setInteger(s)
        return ans
    }

    var l = 0 // '['的个数 
    var r = 0 // ']'的个数

    var num = ''
    // var arr = []
    for (var i = 0; i < s.length; ++i) {
        var ch = s[i]

        if (ch === '[') {
            l++
            var sub = ''
            while (i < s.length) {
                i++
                ch = s[i]

                if (ch === '[') {
                    l++
                } else if (ch === ']') {
                    r++
                }

                if (l === r) {
                    var res = deserialize(`[${sub}]`)
                    res && ans.add(res)
                    // arr.push(sub)
                    break
                } else {
                    sub += ch
                }
            }
        } else if (ch === ',') {
            var res = deserialize(num)
            res && ans.add(res)
            // arr.push(num)
            num = ''
        } else {
            num += ch
        }
    }
    if (num) {
        ans.add(deserialize(num))
    }

    return ans
};

var s = "[123,[456,[789]]]" // 123，[456,[789]]
s = "[123,456,[788,799,833],[[]],10,[]]"
var res = deserialize(s)
console.log(res)