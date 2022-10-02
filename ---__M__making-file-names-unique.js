// https://leetcode.com/problems/making-file-names-unique/
const c = console.log.bind(console);

var getFolderNames = function(names) {
    let map = new Map();
    names.forEach((item) => {
        map.set(item, map.get(item) + 1 || 1);
    });

    // let arr = [];
    let valueMap = new Map();
    for (let [key, value] of map.entries()) {
        if (value == 1) {
            let valueSplit = key.split("(")[1];
            let value = String(valueSplit).split(")")[0];
            if (value !== "undefined") {
                // c(value + " " + key)
                valueMap.set(key.split("(")[0], value);
            }
        }
        // c(key);
    }
    let arr = [];
    let secondItemFlag = false;
    names.forEach((item) => {
        if (map.get(item) >= 2 && secondItemFlag == true) {
            if (valueMap.has(item)) {
                map.set(item, parseInt(map.get(item)) - 1);
                let returnItem = item + `(${parseInt(valueMap.get(item)) + 1})`;
                valueMap.set(item, parseInt(valueMap.get(item)) + 1);
                arr.push(returnItem);
                map.get(item) == 1 ? secondItemFlag = false : ''
            } else {

                map.set(item, parseInt(map.get(item)) - 1);
                let returnItem = item + `(${parseInt(valueMap.get(item) || 0) + 1})`;
                valueMap.set(item, parseInt(valueMap.get(item) || 0) + 1);
                arr.push(returnItem);
            }
        } else if (map.get(item) >= 2 && secondItemFlag == false) {
            // c("shit");
            secondItemFlag = true;
            arr.push(item);
        } else {
            arr.push(item);
        }

    });

    return arr;
};
// c(getFolderNames(["gta", "gta(1)", "gta", "avalon"]));


// c(getFolderNames(["wano", "wano", "wano", "wano", "ab", "ab(1)", "ab"]));


c(getFolderNames(["kaido", "kaido(1)", "kaido", "kaido(1)"]));