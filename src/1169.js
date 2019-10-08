/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
    var map = {}
    var ans = new Set()
    for (var i = 0; i < transactions.length; ++i) {
        var cur = transactions[i]
        var [name, time, money, city] = cur.split(',')

        // 条件1：金额超过1000
        if (money > 1000) {
            ans.add(cur)
        }
        // 条件2，同名且不同城市的另外一笔交易间隔小于60
        if (!map[name]) {
            map[name] = []
        }
        for (var j = 0; j < map[name].length; ++j) {
            var record = map[name][j]
            if (record.city !== city && Math.abs(record.time - time) <= 60) {
                ans.add(cur)
                ans.add(record.full)
            }
        }
        map[name].push({ time, city, full: cur })
    }
    return Array.from(ans)
};

var arr = [
    "alex,676,260,bangkok",
    "bob,656,1366,bangkok",
    "alex,393,616,bangkok",
    "bob,820,990,amsterdam",
    "alex,596,1390,amsterdam"
]
arr = ["alex,676,260,bangkok", "bob,656,1366,bangkok", "alex,393,616,bangkok", "bob,820,990,amsterdam", "alex,596,1390,amsterdam"]
// ["bob,656,1366,bangkok","alex,596,1390,amsterdam"]
// ["bob,656,1366,bangkok","bob,820,990,amsterdam","alex,596,1390,amsterdam","alex,393,616,bangkok"]
var res = invalidTransactions(arr)
console.log(res)