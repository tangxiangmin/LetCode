/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
// 思路：山脉数组左变是递增，右边是递减，因此先使用二分找到峰值，然后从左边寻找，最后从右边寻找
var findInMountainArray = function(target, mountainArr) {
    var l = 0
    var r = mountainArr.length()
    var middle
    while(l < r){
        var m = (l+r) >> 1
        var cur = mountainArr.get(m)
        var prev = mountainArr.get(m-1)
        var next = mountainArr.get(m+1)
        if(cur > prev && cur > next){
            middle = m
            break
        }else if(cur > prev){
            l = m+1
        }else {
            r = m 
        }
    }
    l = 0 
    r = middle
    while(l < r){
        var m = (l+r) >> 1
        var cur = mountainArr.get(m)
        if(cur === target){
            return m
        }else if(cur > target){
            r = m
        }else {
            l = m + 1
        }
    }

    l = middle
    r = mountainArr.length()
    while(l < r){
        var m = (l+r) >> 1
        var cur = mountainArr.get(m)
        if(cur === target){
            return m
        }else if(cur > target){
            l = m + 1
        }else {
            r = m
        }
    }
};

var array = [1,2,3,4,5,3,1], target = 3
// var res =findInMountainArray(target, array)