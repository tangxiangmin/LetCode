/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
    return sentence.replace(/(?<=(^|\s)\$)(\d+)(?=\s|$)/igm, function (match, $1, $2) {
        return ($2 * (100 - discount) / 100).toFixed(2)
    })
};
var sentence = "there are $1 $2 and 5$ candies in the shop", discount = 50
// sentence = "1 2 $3 4 $5 $6 7 8$ $9 $10$", discount = 100
// sentence = "$7383692 5q $5870426", discount = 64
var ans = discountPrices(sentence, discount)
console.log(ans)