// 判断字符末位bit字符是否可由1-bit展示

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let len = bits.length;
    let res = []
    for(let i = 0; i < len;){
        if(bits[i] === 1){
            let item = bits[i] * 10 + bits[i+1]
            item && res.push(item)
            i += 2;
        }else {
            res.push(bits[i]);
            i++;
        }
    }
    return res[res.length - 1] === 0
};

isOneBitCharacter([1,0,0])
