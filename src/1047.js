/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    if(S.length <= 1){
        return S
    }

    var res = []
    for(var i = 0; i < S.length; ++i) {
        var c = S[i]
        var next = S[i+1]
        if(!next){
            res.push(c)
            break
        }
        if (c !== next) {
            res.push(c);
        } else {
            i++;
        }
    }
    if(res.length === S.length){
        return S
    }else {
        return removeDuplicates(res.join(''))
    }
};


console.log(removeDuplicates("zxxy"));