// 给定邮箱的判定规则，和一组邮箱列表，判断有多少不同的邮箱可以收到邮件

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let res = 0;
    let nameHash = {};
    function formatEmail(email){
        let arr = email.split('@');
        let localName = arr[0],
            domainName = arr[1];
        localName = localName.replace(/\./g, "").split("+")[0];

        return localName + '@' + domainName;
    }
    emails.forEach(item=>{
        let email = formatEmail(item)
        if(!nameHash[email]){
            res++;
            nameHash[email] = true;
        }
    })
    return res
};

var input = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];

var output = numUniqueEmails(input);

console.log(output);