/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = new Map()
    for(var i = 0; i < s.length; ++i){
        var c = s[i]
        if(!map.has(c)){
            map.set(c, {
                index: i,
                times: 0
            })
        }
        var data = map.get(c)
        map.set(c, {
            index: i,
            times: data.times + 1
        })
    }

    var ans = -1
    map.forEach(((data, key)=>{
        if(data.times === 1 && ans === -1){
            ans = data.index
            return false
        }
    }))

    return ans
};
