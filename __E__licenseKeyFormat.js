// https://leetcode.com/problems/license-key-formatting/
const c = console.log.bind(console);

//done by me but 
var licenseKeyFormatting = function(s, k) {
    let finalString = firstCheck(s, k);
    let finalStringCheck = finalString.split("-");
    for (let i = 1; i < finalStringCheck.length; i++) {
        if (finalStringCheck[i].length != k) {
            return lastCheck(s, k);
        }
    }
    return finalString;
};
let firstCheck = (s, k) => {
    let sSplited = s.split("-");
    let finalString = "";

    if (sSplited[0].length < k) {
        finalString += sSplited[0].slice(0, k);
        sSplited[0] = sSplited[0].replace(finalString, "");
    }

    let string = sSplited.join("").split(",").join(",");

    for (let i = 0; i < string.length; i = i + k) {
        if (finalString == "") {
            finalString += string.slice(i, i + k).toUpperCase();
        } else {
            finalString += "-" + string.slice(i, i + k).toUpperCase();
        }
    }

    return finalString;
};
let lastCheck = (s, k) => {
    let sSplited = s.split("-");
    let finalString = "";
    let string = sSplited.join("").split(",").join(",");
    string = string.split('').reverse().join('');

    for (let i = 0; i < string.length; i = i + k) {
        if (finalString == "") {
            finalString += string.slice(i, i + k).toUpperCase();
        } else {
            finalString += "-" + string.slice(i, i + k).toUpperCase();
        }
    }



    return finalString.split('').reverse().join('');
};

c(licenseKeyFormatting("5F3Z-2e-9-w", 4));

c(licenseKeyFormatting("2-5g-3-Jd", 2));

c(licenseKeyFormatting("2-4A0r7-4k", 4));

c(licenseKeyFormatting("2-4A0r7-4k", 3));