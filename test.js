// https://leetcode.com/problems/determine-if-two-strings-are-close/


const c = console.log.bind(console);

var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) {
        return false;
    }
    let word1_map = new Map();
    let word2_map = new Map();

    // word1_map.set("a", 2)
    // word1_map.set("a", 2)

    // for (let [key, value] of word1_map.entries()) {
    //     console.log(key, value);
    // }
    // return word1_map.get("a")
    // return word1_map.size;
    for (let i = 0; i < word1.length; i++) {
        word1_map.set(
            word1_map.has(word1[i]) ? word1[i] : word1[i],
            word1_map.has(word1[i]) ? word1_map.get(word1[i]) + 1 : 1
        );
        word2_map.set(
            word2_map.has(word2[i]) ? word2[i] : word2[i],
            word2_map.has(word2[i]) ? word2_map.get(word2[i]) + 1 : 1
        );
    }

    // return word1_map
    let values_word2 = [...word2_map.values()];
    let values_word1 = [...word1_map.values()];

    // return values;
    if (word2_map.size != word1_map.size) {
        return false;
    }

    for (let [key, value] of word1_map.entries()) {
        // c(value)
        // c(!values.includes(value))
        // c(word2_map.get(key))
        if (word2_map.get(key) > 0) {} else {
            return false;
        }
        if (values_word2.includes(value) === false) {
            return false;
        }
    }
    for (let [key, value] of word2_map.entries()) {
        // c(value)
        // c(!values.includes(value))
        // c(!word1_map.get(key))
        if (word2_map.get(key) > 0) {} else {
            return false;
        }
        if (values_word1.includes(value) === false) {
            return false;
        }
    }

    let word1_value_map = new Map();
    let word2_value_map = new Map();

    for (let i = 0; i < values_word1.length; i++) {
        word1_value_map.set(
            word1_value_map.has(values_word1[i]) ? values_word1[i] : values_word1[i],
            word1_value_map.has(values_word1[i]) ?
            word1_value_map.get(values_word1[i]) + 1 :
            1
        );
        word2_value_map.set(
            word2_value_map.has(values_word2[i]) ? values_word2[i] : values_word2[i],
            word2_value_map.has(values_word2[i]) ?
            word2_value_map.get(values_word2[i]) + 1 :
            1
        );
    }
    for (let [key, value] of word1_value_map.entries()) {
        if (word2_value_map.get(key) != value) {
            return false;
        }
    }

    return true;
};



var closeStrings = function(A, B) {
    let len = A.length
    if (len !== B.length) return false
    let fmA = new Uint32Array(26),
        fmB = new Uint32Array(26)
    for (let i = 0; i < len; i++)
        fmA[A.charCodeAt(i) - 97]++, fmB[B.charCodeAt(i) - 97]++
        for (let i = 0; i < 26; i++)
            if (!!fmA[i] != !!fmB[i]) return false
    fmA.sort()
    fmB.sort()
    for (let i = 0; i < 26; i++)
        if (fmA[i] !== fmB[i]) return false
    return true
};


c(closeStrings("cabbba", "abbeee"));
c(closeStrings("cabbba", "aabbss"));

c(closeStrings("abbzzca", "babzzcq"));

c(closeStrings("abbzzca", "babzzcz"));

c(closeStrings("abc", "bca")); // true
c(closeStrings("uau", "ssx")); //false

c(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"));