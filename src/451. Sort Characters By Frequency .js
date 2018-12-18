/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let hash = {}
    for(let i = 0; i < s.length; ++i){
        let key = s[i]
        if(!hash[key]){
            hash[key] = 0
        }
        hash[key]++
    }
    return Object.keys(hash).sort((a,b)=>{
        return hash[b] - hash[a] 
    }).reduce((acc, item)=>{
        for(let i = 0; i < hash[item]; ++i){
            acc += item
        }
        return acc
    }, "")
};