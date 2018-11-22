/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    function parseDomains(str){
        let arr = str.split('.')
        let res = []
        for(let i = 0; i < arr.length-1; ++i){
            let sub = arr.slice(i+1)
            res.push(sub.join('.'))
        }
        return res
    }
    let hashMap = {}
    for (let i = 0; i < cpdomains.length; ++i){
        let item = cpdomains[i].split(' ');
        let domains = parseDomains(item[1]);
        for(let j = 0; j < domains.length; ++j){
            let domain = domains[j]

            if (!hashMap[domain]){
                hashMap[domain] = 0
            }

            hashMap[domain] += parseInt(item[0], 10);
        }
    }
    let res = []
    for(let key in hashMap){
        let val = hashMap[key]
        res.push(`${val} ${key}`)
    }
    return res
};