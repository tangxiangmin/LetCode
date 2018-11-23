// 找到两个语句中的uncommon单词
// uncommon:仅在一个语句中出现一次，再另一个语句中未出现

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
   
    let hash = {}
    function getWordsMap(s) {
        let words = s.split(' ')
        for(let i = 0; i < words.length; ++i){
            let word = words[i]
            if(!hash[word]){
                hash[word] = 0
            }
            hash[word]++
        }
    }
    getWordsMap(A)
    getWordsMap(B);
    let res = []
    for(let key in hash){
        if(hash[key] === 1){
            res.push(key)
        }
    }
    return res
};