var isUgly = function(n) {
    let checkArray = [2, 3, 5]
    let factors = [];
    if (n == 1) {
        return true;

    }
    for (let i = 2; i < n; i++) {
        n % i == 0 ? factors.push(i) : '';
    }
    if (factors[0] == null) {
        return false;
    }
    let result = true;
    for (let i = 0; i < factors.length; i++) {
        if (checkArray.includes(factors[i]) == false) {
            result = false;
            break;

        };

    }
    return result;
};