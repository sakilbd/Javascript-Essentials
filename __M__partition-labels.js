// https://leetcode.com/problems/partition-labels/

const c = console.log.bind(console);

var partitionLabels = function(s) {
    let res = [];
    let sliceStart = 0;
    s = s + " ";

    for (let i = 1; i < s.length; i++) {

        let left = s.slice(sliceStart, i)
        let right = s.slice(i, s.length);

        let commonItems = [...new Set(left.split(''))].filter(item => [...new Set(right.split(''))].includes(item));
        if (commonItems == "") {
            res.push(left);
            sliceStart = i;

        }

    }
    return res.map(item => item.length);
};


//from community with less runtime 
// var partitionLabels = function(s) {
//     var lastOccurence = {};
//     for (let i = 0; i < s.length; i++) {
//         lastOccurence[s[i]] = i;
//     }
//     var start = -1,
//         end = -1,
//         ans = [];
//     for (let i = 0; i < s.length; i++) {
//         end = Math.max(end, lastOccurence[s[i]])
//         if (i == end) {
//             ans.push(end - start)
//             start = i;
//         }
//     }

//     return ans;
// };



c(partitionLabels("ababcbacadefegdehijhklij"));
c(partitionLabels("eccbbbbdec"))
    // c(partitionLabels("abcdefghijak"));