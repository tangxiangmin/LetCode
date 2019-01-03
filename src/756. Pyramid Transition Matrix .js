/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function (bottom, allowed) {
    if (bottom.length < 2) {
        return true
    }
    function findAllow(arr, prefix) {
        let res = []
        for (let i = 0; i < arr.length; ++i) {
            let item = arr[i]
            if (item.indexOf(prefix) === 0) {
                res.push(item)
            }
        }
        return res
    }

    let topArr = [""];
    for (let i = 0; i < bottom.length - 1; ++i) {
        let target = bottom[i] + bottom[i + 1];
        let items = findAllow(allowed, target)
        if (!items.length) {
            return false;
        } else {
            let arr = []
            topArr.forEach((top) => {
                items.forEach(item => {
                    var tmp = top;
                    tmp += item[2];
                    arr.push(tmp);
                })
            })
            topArr = arr
        }
    }
    for (let i = 0; i < topArr.length; ++i) {
        let top = topArr[i];
        if (pyramidTransition(top, allowed)) {
            return true
        }
    }
    return false
};

// var bottom = "XYZ",
//     allowed = ["XYD", "YZE", "DEA", "FFF"];

// var bottom = "XXYX", allowed = ["XXX", "XXY", "XYX", "XYY", "YXZ"]

// var bottom = "CCC", allowed = ["CBB", "ACB", "ABD", "CDB", "BDC", "CBC", "DBA", "DBB", "CAB", "BCB", "BCC", "BAA", "CCD", "BDD", "DDD", "CCA", "CAA", "CCC", "CCB"];



let res = pyramidTransition("ABC",
["ABD", "BCE", "DEF", "FFF"])
console.log(res)