const c = console.log.bind(console);

// var largestNumber = function(nums) {
//     // return nums[1].toString()[0];
//     return nums.sort((a, b) => {
//         if (a.toString()[0] > b.toString()[0]) {
//             return b.toString()[0] - a.toString()[0]
//         } else if (a.toString()[0] == b.toString()[0]) {
//             return (b.toString()[1] ? b.toString()[1] : 0) - (a.toString()[1] ? a.toString()[1] : 0)
//         } else if (a.toString()[0] == b.toString()[0] && a.toString()[1] == b.toString()[1]) {
//             return (b.toString()[2] ? b.toString()[2] : 0) - (a.toString()[2] ? a.toString()[2] : 0)
//         }
//     }).join('')
// };

var largestNumber = function(nums) {
    // return nums[1].toString().slice(0, 2);
    let res_1 = nums.sort((a, b) => {
        let _aStr = a.toString();
        let _bStr = b.toString();
        if (_aStr[0] > _bStr[0]) {
            return _bStr[0] - _aStr[0]
        } else {
            let idx = 1;
            while (true) {
                let aSlice = _aStr.slice(0, idx);
                let bSlice = _bStr.slice(0, idx)
                if (aSlice == bSlice) {
                    if (idx >= _aStr.length && idx >= _bStr.length) {
                        return bSlice - aSlice;
                    }
                    idx++
                } else {
                    // c(_bStr[idx - 1], bSlice, idx)
                    // c(_aStr[idx - 1], aSlice, idx)
                    let _aValue = (_aStr[idx - 1] ? _aStr[idx - 1] : 0)
                    let _bValue = (_bStr[idx - 1] ? _aStr[idx - 1] : 0)

                    if (_aValue == 0 || _bValue == 0) {
                        return _aStr.length - _bStr.length;
                    } else {
                        return _bValue - _aValue
                    }
                    return (_bStr[idx - 1] ? _bStr[idx - 1] : 0) - (_aStr[idx - 1] ? _aStr[idx - 1] : 0)

                    // let _aValue = (_aStr[idx - 1] ? _aStr[idx - 1] : 0)
                    // let _bValue = (_bStr[idx - 1] ? _aStr[idx - 1] : 0)

                    // if (_aValue == 0 || _bValue == 0) {
                    //     return _bStr.length - _aStr.length;
                    // } else {
                    //     return _bValue - _aValue
                    // }


                    // if(_aValue == _bStr)

                    // return bSlice - aSlice;
                }

            }
        }
    })
    let res_2 = nums.sort((a, b) => {
        let _aStr = a.toString();
        let _bStr = b.toString();
        if (_aStr[0] > _bStr[0]) {
            return _bStr[0] - _aStr[0]
        } else {
            let idx = 1;
            while (true) {
                let aSlice = _aStr.slice(0, idx);
                let bSlice = _bStr.slice(0, idx)
                if (aSlice == bSlice) {
                    if (idx == _aStr.length && idx == _bStr.length) {
                        return bSlice - aSlice;
                    }
                    idx++
                } else {
                    // c(_bStr[idx - 1], bSlice, idx)
                    // c(_aStr[idx - 1], aSlice, idx)
                    // return (_bStr[idx - 1] ? _bStr[idx - 1] : 0) - (_aStr[idx - 1] ? _aStr[idx - 1] : 0)

                    let _aValue = (_aStr[idx - 1] ? _aStr[idx - 1] : 0)
                    let _bValue = (_bStr[idx - 1] ? _aStr[idx - 1] : 0)

                    if (_aValue == 0 && _bValue == 0) {
                        return _aStr.length - _bStr.length;
                    } else {
                        return _bValue - _aValue
                    }
                    // return _bValue - _aValue


                    // if(_aValue == _bStr)

                    // return bSlice - aSlice;
                }

            }
        }
    })

    return res_1
    return parseInt(res_1) > parseInt(res_2) ? res_1 : res_2
    return Math.max(res_1, res_2).toString()
        // return res_1
};



// c(largestNumber([3, 30, 34, 5, 9]))

// c(largestNumber([10, 2]))
// c(largestNumber([432, 43243]))

// c(largestNumber([111311, 1113]))

// c(largestNumber([8308, 8308, 830]))

// c(largestNumber([999999998, 999999997, 999999999]))

c(largestNumber([128, 12, 320, 32]))