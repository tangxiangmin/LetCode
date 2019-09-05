/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let map = (climbStairs.map || (climbStairs.map = new Map()))
    console.log(map)
    if(n === 1){
        return 1
    }else if(n === 2){
        return 2
    }else {
        if(map.has(n)){
            return map.get(n)
        }
        let res = climbStairs(n - 1) + climbStairs(n - 2);
        map.set(n, res)
        return res;
    }
};
climbStairs(45)
