/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    while(k > 0){
        var maxIndex = 0
        for(var i = 1; i < gifts.length; ++i){
            if(gifts[i] > gifts[maxIndex]) {
                maxIndex = i
            }
        }
        gifts[maxIndex] = Math.floor(Math.sqrt(gifts[maxIndex]))
        k--
    }
    return gifts.reduce((acc, row)=>{
        return acc + row
    },0)

};

var gifts = [25,64,9,4,100], k = 4
gifts = [1,1,1,1], k = 4
var ans = pickGifts(gifts, k)
console.log(ans)