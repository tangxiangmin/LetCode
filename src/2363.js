/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    var map = {}
    for(var [v, w] of items1){
        if(!map[v]) map[v] = 0
        map[v] += w
    }
    for(var [v, w] of items2){
        if(!map[v]) map[v] = 0
        map[v] += w
    }
    return Object.keys(map).sort((a,b)=>a-b).map(key=>{
        return [Number(key), map[key]]
    })
};

var items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]] // [[1,6],[3,9],[4,5]]
var ans = mergeSimilarItems(items1,items2)
console.log(ans)