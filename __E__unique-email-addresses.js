// https://leetcode.com/problems/unique-email-addresses/
const c = console.log.bind(console);

var numUniqueEmails = function(emails) {
    let map = new Map();
    emails.forEach(item => {
        let splitArray = item.split('@');
        let __plusSeperated = splitArray[0].split('+')[0];
        let __dotJoin = __plusSeperated.split('.').join('');
        let pushVar = __dotJoin + '@' + splitArray[1];
        map.set(pushVar, map.get(pushVar) + 1 || 1);

    })
    return map.size;
};


c(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))

c(numUniqueEmails(["test.email+alex@leetcode.com", "test.email.leet+alex@code.com"]));