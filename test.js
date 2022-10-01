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
    return names.map((item) => {
        if (map.get(item) >= 2) {
            if (valueMap.has(item)) {
                map.set(item, parseInt(map.get(item)) - 1);
                let returnItem = item + `(${parseInt(valueMap.get(item)) + 1})`;
                valueMap.set(item, parseInt(valueMap.get(item)) + 1);
                return returnItem
            } else {
                map.set(item, parseInt(map.get(item)) - 1);
                let returnItem = item + `(${parseInt(valueMap.get(item)||0) + 1})`;
                valueMap.set(item, parseInt(valueMap.get(item) || 0) + 1);
                return returnItem
            }
        } else {
            return item;
        }
    })

    // return valueMap;
};
c(getFolderNames(["gta", "gta(1)", 'gta', "avalon", ]));

c(getFolderNames(["wano", "wano", "wano", "wano"]));