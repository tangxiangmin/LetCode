/**
 * @param {string[]} names
 * @return {string[]}
 */

// 思路：BF模拟
var getFolderNames = function (names) {
    const map = {}
    const ans = []
    for (const name of names) {
        let i = 0
        while (map[create(name, i)]) {
            i++
        }
        const val = create(name, i)
        map[val] = 1
        ans.push(val)
    }
    return ans

    function create(name, i) {
        if (i === 0) return name
        return name + `(${i})`
    }
}
var getFolderNames = function (names) {
    const namesDic = {}; // 存放每个文件的个数
    const res = []; // 存放结果

    for (const name of names) {
        if (!(name in namesDic)) { // 如果不在字典中，就直接加入结果集中
            res.push(name);
            namesDic[name] = 1;
        } else {
            let curName = `${name}(${namesDic[name]})`;
            namesDic[name] += 1;
            while (curName in namesDic) {
                curName = `${name}(${namesDic[name]})`;
                namesDic[name] += 1;
            }
            res.push(curName);
            namesDic[curName] = 1;
        }
    }

    return res;
}
var names = ["gta", "gta(1)", "gta", "avalon"]
// names = ["pes", "fifa", "gta", "pes(2019)"]
// names = ["onepiece", "onepiece(1)", "onepiece(2)", "onepiece(3)", "onepiece"]
var ans = getFolderNames(names)
console.log(ans)