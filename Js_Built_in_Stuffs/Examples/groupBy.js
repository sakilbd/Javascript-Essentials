const products = [
    { name: "apples", category: "fruits" },
    { name: "oranges", category: "fruits" },
    { name: "potatoes", category: "vegetables" },
];

function groupBy(arr, property) {
    return arr.reduce((result, obj) => {
        const key = obj[property];
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(obj);
        return result;
    }, {});
}
const groupByCategory = groupBy(products, "category");
console.log(groupByCategory);
//returns
// {
//     fruits: [
//       { name: 'apples', category: 'fruits' },
//       { name: 'oranges', category: 'fruits' }
//     ],
//     vegetables: [ { name: 'potatoes', category: 'vegetables' } ]
//   }