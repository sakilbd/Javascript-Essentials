// https://leetcode.com/problems/long-pressed-name/
const c = console.log.bind(console);

var isLongPressedName = function(name, typed) {
    let nameArr = [];
    let typedArr = [];
    var temp = "";

    for (let i = 0; i <= name.length; i++) {
        if (temp[0] == name[i]) {
            temp += name[i];
        } else {
            if (temp == "") {
                temp += name[i];
            } else {
                nameArr.push(temp);
                temp = "";
                temp += name[i];
            }
        }
    }
    temp = ''
        // return temp


    for (let i = 0; i <= typed.length; i++) {
        if (temp[0] == typed[i]) {
            temp += typed[i];
        } else {
            if (temp == "") {
                temp += typed[i];
            } else {
                typedArr.push(temp);
                temp = "";
                temp += typed[i];
            }
        }
    }
    if (nameArr.length != typedArr.length) {
        return false;
    }
    for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i][0] != typedArr[i][0]) {
            return false;
        } else {
            if (nameArr[i].length > typedArr[i].length) {
                return false
            }

        }
    }
    return true
};

c(isLongPressedName("saeed", "ssaaedd"))
c(isLongPressedName("leelee", "lleeelee")) //t
c(isLongPressedName("xnhtq", "xhhttqq"))
c(isLongPressedName('a', 'b'))
c(isLongPressedName("rick", "kric"))


c(isLongPressedName("alex", "aaleex"))

c(isLongPressedName("acc", "aaaacccc"))