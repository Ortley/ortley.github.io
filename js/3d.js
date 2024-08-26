
class vector3 {
    static zero = new vector3(0, 0, 0);
    static axisX = new vector3(1, 0, 0);
    static axisY = new vector3(0, 1, 0);
    static axisZ = new vector3(0, 0, 1);

    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.length = 0;
    };
};

class basis3D {
    constructor(x = new vector3.axisX, y = new vector3.axisY, z = new vector3.axisZ) {
        this.x = x;
        this.y = y;
        this.z = z;
    };
};

class transform3D {
    constructor(basis = new basis3D(), position = new vector3()) {
        this.basis = basis;
        this.position = position;

        this.x = this.basis.x;
        this.y = this.basis.y;
        this.z = this.basis.z;
        this.w = this.position;
    };
};

start3D();

function start3D() {

    const ambientLight = {
        r: 90 / 256,
        g: 90 / 256,
        b: 90 / 256,
    };
    const lightColour = {
        r: 256 / 256,
        g: 256 / 256,
        b: 256 / 256,
    };
    const albedo = {
        r: 256 / 256,
        g: 256 / 256,
        b: 256 / 256,
    };

    const lightPosition = {
        x: 0,
        y: 0,
        z: 200,
    };

    var targetPosition = {
        x: 0,
        y: 0,
        z: 200,
    };


    var canvas = document.getElementById("3d-content");

    document.addEventListener("mousemove", (e) => {
        targetPosition.x = e.pageX;
        targetPosition.y = e.pageY;
    });
};