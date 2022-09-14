for (let [start, end, direction] of shifts) {
    const v = direction ? 1 : -1
    for (let i = start; i <= end; i++) {
        arr[i] += v
    }
}


shifts = [1, 2, 1]