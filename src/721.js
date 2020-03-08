/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let map = {};
    // {
    //     [name]: [
    //         { [email1]: true, [email2]: true },
    //         { [email3]: true },
    //     ];
    // }

    for (let i = 0; i < accounts.length; ++i) {
        let [name, ...emails] = accounts[i];
        if (!map[name]) {
            let emailMap = {};
            emails.forEach(email => {
                emailMap[email] = true;
            });
            map[name] = [emailMap];
        } else {
            let arr = map[name];
            let hasSame = false;
            for (let j = 0; j < arr.length; ++j) {
                let emailMap = arr[j];
                for (let k = 0; k < emails.length; ++k) {
                    let email = emails[k];
                    if (emailMap[email]) {
                        hasSame = true;
                        break;
                    }
                }
                if (hasSame) {
                    emails.forEach(email => {
                        emailMap[email] = true;
                    });
                    break;
                }
            }
            if (!hasSame) {
                let emailMap = {};
                emails.forEach(email => {
                    emailMap[email] = true;
                });
                arr.push(emailMap);
            }
        }
    }

    let ans = Object.keys(map).reduce((acc, name) => {
        let arr = map[name].map(item => {
            let emailList = Object.keys(item).sort();
            return [name, ...emailList];
        });
        return acc.concat(arr);
    }, []);
    return ans;
};

var accounts = [
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"]
];

accounts = [
    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"]
];

var res = accountsMerge(accounts);
console.log(res);
