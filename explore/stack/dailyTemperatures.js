/**
 * https://leetcode-cn.com/explore/learn/card/queue-stack/218/stack-last-in-first-out-data-structure/879/
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    var st = []
    
    // 初始值设为0
    var ans = new Array(T.length).fill(0);

    for(var i = 0; i < T.length; ++i){
        while(T[i] > T[st[st.length - 1]]){
            var t = st[st.length - 1]
            st.pop();
            ans[t] = i - t;
        }
        st.push(i)
    }

    return ans
};

var res = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

console.log(res) // [1, 1, 4, 2, 1, 1, 0, 0]
