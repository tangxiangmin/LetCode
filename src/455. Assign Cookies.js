/**
 * Created by admin on 2017/4/8.
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>{return a-b});
    s.sort((a,b)=>{return a-b});

    var count = 0;
    for (var i = 0, len = s.length; i < len; ++i){
        if (g[count] <= s[i]){
            count++;
        }
    }
    return count;
};

var g = [10,9,8,7],
    s = [5,6,7,8];

console.log(findContentChildren(g, s));