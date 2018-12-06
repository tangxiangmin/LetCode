/**
 * @param {number[]} deck
 * @return {number[]}
 */

[2, 13, 3, 11, 5, 17, 7]
[1,6,2,5,3,7,4]
// 2, 13, 3, 11, 5, 17, 7, 19
//  13, 11 17 19
2,3,5,7,11,13,17
var deckRevealedIncreasing = function (deck) {
    let res = []
    deck.sort((a,b)=>a-b)

    let len = deck.length
    let mid = Math.ceil(len / 2)
    
    let originArr = deck.slice(0, mid)
    let insertArr = deck.slice(mid)

    let divide = Math.ceil(insertArr.length/2);
    let decreaseArr = insertArr.slice(0, divide);
    let increaseArr = insertArr.slice(divide);

    for(let i = 0; i < len; ++i){
        if(i%2 === 0) {
            res[i] = originArr.shift()
        }else {
            if (i <= mid){
                res[i] = decreaseArr.pop()
            } else {
                res[i] = increaseArr.shift();
            }
        }
    }
    return res
};
let arr = [2, 13, 3, 11, 5, 17, 7]
// let arr = [1,2]
arr = [1, 2, 3, 4, 5]
let res = deckRevealedIncreasing(arr)
console.log(res)
