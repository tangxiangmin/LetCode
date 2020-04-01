/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 思路1：bf，O(n^2)，部分case超时
var bulbSwitch = function(n) {
    var arr = new Array(n).fill(true)
    var count = 2
    while(count <= n){
        for(let i = 0; i < n; ++i){
            if((i+1) % count === 0){
                arr[i] = !arr[i]
            }
        }
        count++
    }
    return arr.filter(i=>i).length
};
// 思路2
// [1,1,1,1,1,1] 2
// [1,0,1,0,1,0] 3
// [1,0,0,0,0,0] 4
// [1,0,0,1,0,0] 5
// [1,0,0,1,1,0] 6
var bulbSwitch = function(n) {
   
};
// @lc code=end

// bulbSwitch(3)

