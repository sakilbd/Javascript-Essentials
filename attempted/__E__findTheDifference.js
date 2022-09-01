// https://leetcode.com/submissions/detail/764945761/
const c = console.log.bind(console);

var findTheDifference = function(s, t) {

    let s_array = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
    let t_array = t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());

    let res = '';

    if (s_array[0] == t_array[0]) {
        s_array.splice(0, 1);
        t_array.splice(0, 1);
    } else {
        res = t_array[0];
        return res;
    }

    return findTheDifference(s_array.join(''), t_array.join(''))



};


c(findTheDifference('abcd', 'dcbae'))