// https://leetcode.com/problems/group-anagrams/description/

const c = console.log.bind(console);

var groupAnagrams = function(strs) {
    let groups = {}
    for (let s of strs) {
        let key = s.split('').sort().join('');
        groups[key] = [...(groups[key] || []), s]
    }
    return Object.values(groups);
};

c(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));