// 判断一个字符串是否长按（某个字符重复出现）

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    // 获取字符串中的连续字符
    function getContinueChar(str){
        let cursor = 0, i = 0
        let res = []
        for (; i < str.length; ++i) {
            if(str[i] != str[cursor]){
                res.push({
                    val: str[cursor],
                    num: i - cursor
                })
                cursor = i;
            }
        }
        res.push({
            val: str[cursor],
            num: i - cursor
        })
        return res
    }
    

    let arr1 = getContinueChar(name)
    let arr2 = getContinueChar(typed);
    
    
    for(let i = 0; i < arr2.length; ++i){
        if (arr1[i].val !== arr2[i].val || arr1[i].num > arr2[i].num){
            return false
        }
    }
    return arr2.length >= arr1.length;
};
