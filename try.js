const c = console.log.bind(console)

var maxLength = function(arr) {

    let i = 0;
    let j = 0;
    let length = 0;
    let str = ''
    arr.sort((a, b) => a.length - b.length)
    while (true) {
        for (i; i < arr.length; i++) {
            for (j = i; j < arr.length; j++) {
                if (arr[j].length == [...new Set(arr[j].split(''))].length) {
                    let temp = str;
                    // c([...new Set((temp + arr[j]).split(''))])
                    if ((temp + arr[j]).length == [...new Set((temp + arr[j]).split(''))].length) {
                        str += arr[j]
                        if (str.length > length)
                            length = str.length
                    }

                }

            }

            j = 0
            str = ''

        }

        if (i == arr.length) {
            break;
        };
    }
    return length;
};
var maxLength = function(arr) {
    let res = 0;

    let solve = (start, curr) => {
        if (curr.length !== new Set(curr.split('')).size) {
            return "shit";
        }

        res = Math.max(res, curr.length);

        for (let i = start; i < arr.length; i++) {
            c(curr)
            c(`${curr}${arr[i]}`)
            c(solve(i + 1, `${curr}${arr[i]}`));
        }
    }

    solve(0, '');

    return res;
};
// c(maxLength(["un", "iq", "ue"]))
c(maxLength(["cha", "r", "act", "ers"]));

// c(maxLength(["a", "abc", "d", "de", "def"]))

// c(maxLength(["ogud", "ejipchfydrgl", "b", "kjxmzhnuoisgqvawel", "mizlcgdqebwuotfnk", "bjvkrgeozidytquchlw", "tzjqwumkirxeal", "x", "rkpuabmo", "mxndpcqzua"])) //20