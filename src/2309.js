/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    var map = {}
    for(var ch of s){
        map[ch] = 1
    }
    var ans 
    Object.keys(map).forEach(key=>{
        if(/[A-Z]/.test(key) && map[key.toLowerCase()]){
            if(!ans || ans < key) {
                ans = key
            }
        }
    })
    return ans || ""
};

var s = "arRAzFif"
"AbCdEfGhIjK"
var ans = greatestLetter(s)
console.log(ans)