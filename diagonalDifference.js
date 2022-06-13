const c = console.log.bind(console);

const x = Number.MAX_SAFE_INTEGER;

function diagonalDifference(arr) {
    let leftAdd = 0;
    let rightAdd = 0;
    for (let x = 0; x < arr.length; x++) {
        let y = 0;
        while (y < arr.length) {
            if (x == y) {
                // c(`${x}+${y}`);
                leftAdd = leftAdd + arr[x][y];
                break;
            }

            y++;
        }
    }
    let x = 0;
    let y = arr.length - 1;
    while (x < arr.length) {
        while (y >= 0) {
            // c(`${x}+${y}`);
            rightAdd = rightAdd + arr[x][y];
            y = y - 1;
            x++;
            break;
        }
    }

    return Math.abs(leftAdd - rightAdd);
}

c(
    diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ])
);