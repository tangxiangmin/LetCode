// 柠檬水找零

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let billsMap = {
        "5": 0,
        "10": 0,
        "20": 0
    };

    function change(bill) {
        if (bill === 5) {
            billsMap["5"]++;
            return true;
        } else if (bill === 10) {
            if (billsMap["5"] > 0) {
                billsMap["5"]--;
                billsMap["10"]++;
                return true;
            } else {
                return false;
            }
        } else if (bill === 20) {
            if (billsMap["5"] > 0 && billsMap["10"] > 0) {
                billsMap["5"]--;
                billsMap["10"]--;
                billsMap["20"]++;
                return true;
            } else if (billsMap["5"] > 3) {
                billsMap["5"] -= 3;
                billsMap["20"]++;
                return true;
            } else {
                return false;
            }
        }
    }

    for (let i = 0; i < bills.length; ++i) {
        i === 18 && console.log(billsMap);
        let res = change(bills[i]);
        console.log(i, res);
        if (!res) {
            return false;
        }
    }
    return true;
};
