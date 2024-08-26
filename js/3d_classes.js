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