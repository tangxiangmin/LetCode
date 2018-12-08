/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {

    let res = []
    for(let i = 0; i < S.length;){
        let key = S[i]
        // 只包含一个字符，则直接分段
        let lastIndex = S.lastIndexOf(key);
        if (lastIndex === i){
            res.push(key)
            i++
        }else {
            let start = i + 1
            // 最短的分组就可能是i 到 lastIndex 之间的字符串
            for (let j = start; j < lastIndex; ++j) {
                let tail = S.lastIndexOf(S[j])
                if(tail > lastIndex){
                    lastIndex = tail
                }
            }
            res.push(S.slice(i, lastIndex+1))
            i = lastIndex+1
        }
    }
    return res.map(item=>item.length)
};
