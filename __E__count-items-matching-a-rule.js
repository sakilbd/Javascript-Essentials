// https://leetcode.com/problems/count-items-matching-a-rule/
const c = console.log.bind(console);
var countMatches = function(items, ruleKey, ruleValue) {
    switch (ruleKey) {
        case 'type':
            {
                return (items.filter(item => {
                    return item[0] == ruleValue
                }).length)
            }

        case 'color':
            {
                return (items.filter(item => {
                    return item[1] == ruleValue
                }).length)
            }

        case 'name':
            {
                return (items.filter(item => {
                    return item[2] == ruleValue
                }).length)
            }

    }
};

c(countMatches([
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
], 'type', 'computer'))