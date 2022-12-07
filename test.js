// https://leetcode.com/problems/reorder-data-in-log-files/

const c = console.log.bind(console);

var isLongPressedName = function(name, typed) {
    let nameMap = {}
    let typedMap = {}
    name.split("").forEach(item => {
        nameMap[item] = nameMap[item] ? nameMap[item] + 1 : 1;
    })

    typed.split("").forEach(item => {
        typedMap[item] = typedMap[item] ? typedMap[item] + 1 : 1;
    })

    if (Object.keys(nameMap).length != Object.keys(typedMap).length) {
        return false;
    }

    for (let key in nameMap) {
        if (!typedMap[key]) {
            return false
        }
        if (typedMap[key] < nameMap[key]) {
            return false

        }
    }
    for (let key in nameMap) {
        if (name[name.length - 1] != typed[typed.length - 1]) {
            return false;
        }
        if (typedMap[key] > nameMap[key]) {
            return true
        }
    }
    for (let key in nameMap) {
        for (let i = 0; i < Object.keys(nameMap).length; i++) {

            if (name[i] != typed[i]) {
                return false;
            }
        }
        if (typedMap[key] == nameMap[key]) {
            return true
        }
    }

};


// c(isLongPressedName("saeed", "ssaaedd"))
// c(isLongPressedName("leelee", "lleeelee")) //t
// c(isLongPressedName("xnhtq", "xhhttqq"))
// c(isLongPressedName('a', 'b'))
// c(isLongPressedName("rick", "kric"))


// c(isLongPressedName("alex", "aaleexa"))

c(isLongPressedName("acc", "aaaacccc"))