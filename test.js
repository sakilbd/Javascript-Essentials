var maxDepth = function(root) {
    count = 0;
    for (let i = 0; i < Math.floor(root.length / 2); i++) {
        if (root[i + 1] != 'null' & root[i + 2] != 'null') {
            count++;
        }


    }
    return count;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));