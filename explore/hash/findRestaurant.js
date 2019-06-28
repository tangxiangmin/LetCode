/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var m1 = new Map()
    for(var i = 0; i < list1.length; ++i){
        var val = list1[i]
        if(!m1.has(val)){
            m1.set(val, i)
        }
    }
    var ans = []
    var min = Infinity
    for(var i = 0; i < list2.length; ++i){
        var val = list2[i]
        if(m1.has(val)){
            var sum = i + m1.get(val)
            if(sum< min){
                ans = [val]
                min = sum
            }else if(sum === min){
                ans.push(val)
            }
        }
    }
    return ans
};
