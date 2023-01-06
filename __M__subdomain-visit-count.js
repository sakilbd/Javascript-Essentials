// https://leetcode.com/problems/subdomain-visit-count/description/


const c = console.log.bind(console);

var subdomainVisits = function(cpdomains) {
    let map = new Map();
    cpdomains.forEach((item) => {
        let [count, domain] = item.split(" ");
        let splitDomain = domain.split('.')
        if (splitDomain.length == 2) {
            let first = splitDomain.join('.');
            let second = splitDomain[1]
            map.has(first) ? map.set(first, parseInt(map.get(first)) + parseInt(count)) : map.set(first, count);
            map.has(second) ? map.set(second, parseInt(map.get(second)) + parseInt(count)) : map.set(second, count);

        } else {
            let first = splitDomain.join('.')
            let second = splitDomain[1] + '.' + splitDomain[2];
            let last = splitDomain[2];

            map.has(first) ? map.set(first, parseInt(map.get(first)) + parseInt(count)) : map.set(first, count);
            map.has(second) ? map.set(second, parseInt(map.get(second)) + parseInt(count)) : map.set(second, count);
            map.has(last) ? map.set(last, parseInt(map.get(last)) + parseInt(count)) : map.set(last, count);

        }
    });
    let res = []
    for (let [key, value] of map) {
        res.push(`${value} ${key}`)
    }
    return res
};

c(
    subdomainVisits([
        "900 google.mail.com",
        "50 yahoo.com",
        "1 intel.mail.com",
        "5 wiki.org",
    ])
);