/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var start = "a".charCodeAt(0); 
    function createCharTmp(str){
        var hash = []
        for(var i = 0 ; i < str.length; ++i){
            var c = str[i]
            var index = c.charCodeAt(0) - start;
            hash[c.charCodeAt(0) - start];
            if (!hash[index]) {
                hash[index] = 1;
            } else {
                hash[index]++;
            }
        }
        
        return hash
    }

    var res = createCharTmp(A[0])

    for(var i = 1; i < A.length; ++i){
        var tmp = createCharTmp(A[i])

        for (var j = 0; j < 26; j++) {
            res[j] = Math.min(res[j], tmp[j]);
        }
    }   
    var list = []
    for (var i = 0; i < res.length; i++) {
        if (res[i] > 0) {
            for (var j = 0; j < res[i]; j++) {
                list.push(String.fromCharCode(i + start))
            }
        }
    }
    return list
};
var res = commonChars(["bella", "label", "roller"]);
console.log(res)