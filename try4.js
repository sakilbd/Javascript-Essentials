const c = console.log.bind(console);

let data = {
    koli: [{
            id: 31,
            device_id: 1,
            slave_address: 131,
            sensometer_id: 1,
            parameter_id: 151,
            value: "30",
            device_timestamps: "2023-03-05 12:52:52",
            created_at: "2023-03-29T08:44:32.000000Z",
            updated_at: "2023-03-29T08:44:32.000000Z",
            level: "2",
            threshold: [{ min: 0, max: 0 }],
            sensor: [{ sensor_name: "water", unit: "kilo" }],
        },
        {
            id: 4,
            device_id: 1,
            slave_address: 104,
            sensometer_id: 1,
            parameter_id: 151,
            value: "23.3",
            device_timestamps: "2023-03-12 14:40:35",
            created_at: "2023-03-22T12:49:36.000000Z",
            updated_at: "2023-03-22T12:49:36.000000Z",
            level: "2",
            threshold: [{ min: 0, max: 0 }],
            sensor: [{ sensor_name: "water", unit: "kilo" }],
        },
        {
            id: 1,
            device_id: 1,
            slave_address: 101,
            sensometer_id: 1,
            parameter_id: 151,
            value: "25.1",
            device_timestamps: "2023-03-12 14:40:35",
            created_at: "2023-03-22T12:49:36.000000Z",
            updated_at: "2023-03-22T12:49:36.000000Z",
            level: "1",
            threshold: [{ min: 0, max: 0 }],
            sensor: [{ sensor_name: "water", unit: "kilo" }],
        },
        {
            id: 2,
            device_id: 1,
            slave_address: 102,
            sensometer_id: 1,
            parameter_id: 151,
            value: "55",
            device_timestamps: "2023-03-05 12:52:52",
            created_at: "2023-03-22T12:49:36.000000Z",
            updated_at: "2023-03-29T08:44:32.000000Z",
            level: "1",
            threshold: [{ min: 0, max: 0 }],
            sensor: [{ sensor_name: "water", unit: "kilo" }],
        },
    ],
    sanowar: [{
            id: 5,
            device_id: 1,
            slave_address: 105,
            sensometer_id: 1,
            parameter_id: 151,
            value: "0",
            device_timestamps: "2023-03-12 14:40:35",
            created_at: "2023-03-22T12:49:36.000000Z",
            updated_at: "2023-03-22T12:49:36.000000Z",
            level: "1",
            threshold: [{ min: 0, max: 0 }],
            sensor: [{ sensor_name: "water", unit: "kilo" }],
        },
        {
            id: 6,
            device_id: 1,
            slave_address: 106,
            sensometer_id: 1,
            parameter_id: 151,
            value: "25.3",
            device_timestamps: "2023-03-12 14:40:35",
            created_at: "2023-03-22T12:49:36.000000Z",
            updated_at: "2023-03-22T12:49:36.000000Z",
            level: "1",
            threshold: [{ min: 0, max: 0 }],
            sensor: [{ sensor_name: "water", unit: "kilo" }],
        },
        {
            id: 7,
            device_id: 1,
            slave_address: 107,
            sensometer_id: 1,
            parameter_id: 151,
            value: "0",
            device_timestamps: "2023-03-12 14:40:35",
            created_at: "2023-03-22T12:49:36.000000Z",
            updated_at: "2023-03-22T12:49:36.000000Z",
            level: "2",
            threshold: [{ min: 0, max: 0 }],
            sensor: [{ sensor_name: "water", unit: "kilo" }],
        },
    ],
};

let levels = [];
const modifiedData = Object.entries(data);

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
const groupByCategory = groupBy(products, "category")
console.log(groupByCategory);
let finalData = {}
for (let [key, value] of modifiedData) {
    // value.forEach((item) => {
    //     levels.push(item.level);
    // });

    const mod = {
        [key]: groupBy(value, "level"),
    };
    finalData = {...finalData, ...mod };
}

c(JSON.stringify(finalData))