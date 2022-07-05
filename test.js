const c = console.log.bind(console);


const testingSort = (array) => {
    // return array.filter((item) => item.length > 2);

    return array.some(item => item.length == 1)

}

c(testingSort(["leetcoder", "leetcode", "od", "hamlet", "am", 'a']));