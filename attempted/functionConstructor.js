const c = console.log.bind(console);



function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;

    this.resize = function(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
}

function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;

    this.move = function(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

function ProgramWindow() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
    this.resize = function(size) {
        this.size.width = size.width < 1 ? 1 : size.width;
        this.size.height = size.height < 1 ? 1 : size.height;
    }
    this.move = function(position) {
        this.position.x = position.x < 0 ? 0 : position.x;
        this.position.y = position.y < 0 ? 0 : position.y;

    }
}

//one way to update size varaible values;
// Size.prototype.resize = function(newWidth, newHeight) {
//     this.width = newWidth;
//     this.height = newHeight;
// };

// const size = new Size();




// c(size.height);
// size.resize(1920, 1080);


// const position = new Position();
// c(position.x);
// position.move(10, 20);
// c(position.x); //logs 10;
// c(position.y); //logs 20

// const pw = new ProgramWindow();
// c(pw.screenSize.height);
// c(pw.size.height);


// const programWindow = new ProgramWindow();

// const newSize = new Size(600, 400);
// programWindow.resize(newSize);
// c(programWindow.size.width);

// c(programWindow.size.height);


const programWindow = new ProgramWindow();

const newPosition = new Position(50, 100);
programWindow.move(newPosition);
c(programWindow.position.x);

c(programWindow.position.y);