// https://exercism.org/tracks/javascript/exercises/coordinate-transformation/edit

// piece of data - val
//reference to next node - next
const c = console.log.bind(console);

function translate2d(dx, dy) {
    function moveCoordinatesRight2Px(x, y) {
        return [x + dx, y + dy];
    }
    return moveCoordinatesRight2Px;
}

function scale2d(sx, sy) {
    function doubleScale(x, y) {
        return [x * sx, y * sy];
    }
    return doubleScale;
}

function composeTransform(f, g) {
    return function(x, y) {
        let value = f(x, y);
        return g(value[0], value[1]);
    };
}

function memoizeTransform(f) {
    let lastX = "";
    let lastY = "";
    let lastResult = "";
    return function(x, y) {
        if (lastX == x && lastY == y) return lastResult;
        lastX = x;
        lastY = y;
        lastResult = f(x, y);
        return lastResult;
    };
}

const translate = new translate2d(2, 3);
// c(translate(2, 3));

const scale = new scale2d(2, 3);
// c(scale(2, 3));

const compose = new composeTransform(translate, translate); //Tough to understand but got this secondary call with parameter is calling through f(x,y);

c(compose(2, 3));


const memoize = memoizeTransform(translate);
c(memoize(2, 3));
// c(compose