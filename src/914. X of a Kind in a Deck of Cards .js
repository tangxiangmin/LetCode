// 卡片配对
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let hash = []
    deck.forEach(item=>{
        if (!hash[item]){
            hash[item] = 0
        }
        hash[item]++
    })

    function gcd(x, y){
        return x == 0 ? y : gcd(y % x, x);
    }
 
    let g = -1
    for (let i = 0; i < hash.length; ++i){
        if(hash[i] > 0){
            if (g == -1){
                g = hash[i];
            }else {
                g = gcd(g, hash[i]);
            }
        }
    }
    return g >=2
};

hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])