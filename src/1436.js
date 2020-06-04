/**
 * @param {string[][]} paths
 * @return {string}
 */
// 思路，收集每个城市的下一站
var destCity = function(paths) {
    var map = {}
    paths.forEach(path=>{
        let [a, b] = path
        map[a] = b
        if(!map[b]){
            map[b] = ''
        }
    })
    for(var key in map){
        if(!map[key]) return key
    }
};